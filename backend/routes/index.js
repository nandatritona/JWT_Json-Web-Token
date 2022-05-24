import { Express } from "express";
import { getUsers } from "../controllers/Users";

const router = Express.Router();

router.get("/users", getUsers);

export default router;