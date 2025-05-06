import express from "express"
import { create_user,getUser } from "../controller/user.js"


const router = express.Router();

router.get("/",getUser)
router.post("/",create_user)

export default router
