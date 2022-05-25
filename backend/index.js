import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";
// import Users from "./models/UserModel.js";
dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log("Connection has been successfully.");
    // jika tdk ada tbl users di db, maka akan di buat kan secara auto
    // await Users.sync();
} catch (error) {
    console.error(error);
}

app.use(express.json());

app.use(router);

app.listen(5000, () => console.log("Server started on port 5000"));