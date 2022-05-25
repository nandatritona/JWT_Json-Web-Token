import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
    //  Error Handling
    try {
      const users = await Users.findAll();
      // res.send(users);
      res.json(users);
    } catch (error) {
      console.log(error);
      // res.status(500).send(error);
    }
}

export const Register = async (req, res) => {
    const { name, email, password, confPassword } = req.body;
    // if (password !== confPassword) return res.status(400).json({ msg: "Password doesn't match" });
    if (password !== confPassword) {
        return res.status(400).json("Password doesn't match");
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        const user = await Users.create({
            name,
            email,
            password: hashPassword,
        });
        res.json("Register Success");
    } catch (error) {
        console.log(error);
    }
}