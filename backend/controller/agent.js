import {sql} from "../config/db.js"

import validator from "validator"


export const create_agent = async(req,res)=>{ 
    const {a_name,a_contact,a_email,a_address} =req.body
    if(!a_name || !a_contact || !a_email || !a_address){
        return res.status(400).json({Message:"All Feilds are required"})
    }
    if (!validator.isEmail(a_email)) {
        return res.status(400).json({ Message: "Invalid email format" });
      }
    if (!validator.isMobilePhone(a_contact)){
        return res.status(400).json({ Message: "Invalid contact format" });
    }
    
    try {const newAgent = await sql`
        INSERT INTO user(a_name,a_contact,a_email,a_address)
        values(${a_name},${a_contact},${a_email.toLowerCase()},${a_address})
        RETURNING *
        `
        console.log("New Agent Added",newAgent)
        return res.status(201).json({Message:"Agent Created Successfully"})
        
    } 
    catch (error) {
        console.log("Error in Adding Agent",error)
        res.status(500).json({success:false,message: "Internal Server Error"})
    }
}
export const get_agent =async(req,res)=>{
    try{
        const agent = await sql`
        SELECT * FROM agent 
        `
        console.log("All Agents",agent)
        res.status(200).json({success:true,data:agent})
    }
    catch (error) {
        console.log("Error in getUser function",error)
        res.status(500).json({success:false,message: "Internal Server Error"})
        }

}