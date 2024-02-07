import { createConnection } from 'mysql2/promise';

// require("dotenv").config;

import { config } from 'dotenv';

config();



let db;
try {

    db = await createConnection({
        host: process.env.HOST,
        user: process.env.USER_NAME,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
    });

    console.log("Connected to the database!");
} catch (error) {
    console.error("Error connecting to the database:", error.message);
}
export default db;