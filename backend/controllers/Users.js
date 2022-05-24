import Users from "../models/USerModel";

 export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        // res.send(users);
        res.json(users)
    } catch (error) {
        res.status(500).send(error);
    }
}