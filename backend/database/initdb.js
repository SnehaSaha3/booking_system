import db from "./tables/userdb.js";
import db1 from "./tables/agentdb.js";
import db2 from "./tables/useragent.js"

export const initDb = async () => {
    try {
      await db;
      await db1
      await db2
      console.log('User table initialized');
      console.log("Agent table is initiallized")
      console.log("UserAgent table is initialised")
    } catch (error) {
      console.error('Failed to initialize DB:', error);
    }
  };