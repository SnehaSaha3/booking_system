import express from "express"
import { create_agent,get_agent } from "../controller/agent.js"

const router = express.Router()
router.post("/",create_agent)
router.get("/",get_agent)
export default router