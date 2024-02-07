import { createConnection } from 'mysql2/promise';

// require("dotenv").config;

// import { config } from 'dotenv';

// config();
// import 'dotenv/config';



let db;
try {

    db = await createConnection({
        host: 'sql309.infinityfree.com',
        user: "epiz_33882337",
        database: "epiz_33882337_pc_master",
        password: '4X9n28MKvmnK',
        port: 3306,
    });

    console.log("Connected to the database!");
} catch (error) {
    console.error("Error connecting to the database:", error.message);
}
export default db;