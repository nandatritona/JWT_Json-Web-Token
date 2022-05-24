import Users from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        // res.send(users);
        res.json(users)
    } catch (error) {
        console.log(error);
        // res.status(500).send(error);
    }
}