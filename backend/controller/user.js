import { sql } from "../config/db.js"
import validator from "validator"

export const getUser= async (req,res)=>{
    try{
        const users = await sql`
        SELECT * FROM users
        `
        console.log("All users",users)
        res.status(200).json({success:true,data:users})
    }
    catch (error) {
        console.log("Error in getUser function",error)
        res.status(500).json({success:false,message: "Internal Server Error"})
        }

}


export const create_user = async(req,res)=>{
    const {u_name,u_contact,u_email,u_address} =req.body
    if(!u_name || !u_contact || !u_email || !u_address){
        return res.status(400).json({Message:"All Feilds are required"})
    }
    if (!validator.isEmail(u_email)) {
        return res.status(400).json({ Message: "Invalid email format" });
      }
    if (!validator.isMobilePhone(u_contact)){
        return res.status(400).json({ Message: "Invalid contact format" });
    }
    
    try {const newUser = await sql`
        INSERT INTO user(u_name,u_contact,u_email,u_address)
        values(${u_name},${u_contact},${u_email.toLowerCase()},${u_address})
        RETURNING *
        `
        console.log("New User Added",newUser)
        return res.status(201).json({Message:"User Created Successfully"})
        
    } catch (error) {
        console.log("Error in Adding User",error)
        res.status(500).json({success:false,message: "Internal Server Error"})
    }
}


export const update_user = async(req,res)=>{
    const{u_id} =req.params
    const{u_name,u_email,u_contact,u_address}= req.body
    try {
        const update_user = await sql`
        UPDATE users
        SET u_name=${u_name},${u_email},${u_contact},${u_address}
        where u_id=${u_id}
        RETURNING *`
    } catch (error) {
        console.log("Error in update_user function",error)
        res.status(500).json({success:false,message: "Internal Server Error"})
    }
}




