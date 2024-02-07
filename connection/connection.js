import { createConnection } from 'mysql2/promise';

let db;
try {

    db = await createConnection({
        host: "localhost",
        user: "root",
        database: "shop_db",
        password: "DsDs21131%#"
    });

    console.log("Connected to the database!");
} catch (error) {
    console.error("Error connecting to the database:", error.message);
}
export default db;