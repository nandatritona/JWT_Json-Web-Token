import Express from "express";
import db from "./config/Database.js";
const app = Express();

try {
    await db.authenticate();
    console.log("Connection has been successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

app.listen(5000, () => console.log("Server started on port 5000"));