import {neon} from "@neondatabase/serverless"
import dotenv from "dotenv"

dotenv.config()

const { PGUSER,PGPASSWORD,PGDATABASE,PGHOST } = process.env



//THIS CREATES A SQL CONNECTION using our env variable
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`
)