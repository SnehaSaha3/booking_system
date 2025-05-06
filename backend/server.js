import express from "express"
import helmet from "helmet"
import dotenv from "dotenv"
import {sql} from "./config/db.js"
import {initDb} from "./database/initdb.js"
import userRoutes from "./routes/userRoutes.js"
import agentRoutes from "./routes/agentRoutes.js"


dotenv.config()
await initDb()

const app = express()
const PORT = process.env.PORT || 3000
console.log(PORT)


app.use(express.json())
app.use(helmet())

app.use("/api/user",userRoutes)
app.use("/api/agent",agentRoutes)

initDb().then(()=> { 
    app.listen(PORT, () => {
    console.log("Server is running on port "+ PORT )

} 
)
}
)   