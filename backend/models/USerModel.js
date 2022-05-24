import { Sequelize } from "sequelize";
import db from "./config/Database.js";

const { DataTypes } = Sequelize;

// Scema for User
const Users = db.define("users", {
    name:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    refresh_token:{
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.TEXT,
    }
}, {
    freezeTableName: true,
});

export default Users;