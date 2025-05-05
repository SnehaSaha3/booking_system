import { sql } from "../../config/db.js";

 const db = inittDb()
 async function inittDb(){
    try {
        await sql`
        CREATE TABLE IF NOT EXISTS users(
        u_id SERIAL PRIMARY KEY,
        u_name varchar(255) NOT NULL,
        u_contact CHAR(10) NOT NULL,
        u_email VARCHAR(255) NOT NULL UNIQUE
            CHECK (
               u_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
            ),
        u_address VARCHAR(255) NOT NULL
)`
    } catch (error) {
        console.log("Error initDb",error)
    }
}

export default db