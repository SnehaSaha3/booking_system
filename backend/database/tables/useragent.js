import { sql } from "../../config/db.js";

 const db1 = initialiseDb()
 async function initialiseDb(){
    try {
        await sql`
        CREATE TABLE IF NOT EXISTS agent(
        a_id SERIAL PRIMARY KEY,
        a_name varchar(255) NOT NULL,
        a_contact CHAR(10) NOT NULL,
        a_email VARCHAR(255) NOT NULL UNIQUE
            CHECK (
               a_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
            ),
        a_address VARCHAR(255) NOT NULL
)`
    } catch (error) {
        console.log("Error initDb",error)
    }
}

export default db1