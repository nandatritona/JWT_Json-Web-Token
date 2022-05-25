import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
    //  Error Handling
    try {
        const users = await Users.findAll({
            attributes: ["id", "name", "email"],
        });
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

export const Login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                email: req.body.email
            }
        });

        // jika hasil find all user ada maka kita cek password
        const match = await bcrypt.compare(req.body.password, user[0].password);
        // jika password tidak sama maka return error
        if (!match) return res.status(400).json("Wrong Password");
        // jika password sama maka di constactkan data user yang ada di db
        const userid = user[0].id;
        const name   = user[0].name;
        const email  = user[0].email;

        // peoses pembuatan token
        const accessToken = jwt.sign({ userid, name, email }, process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "20s"
            }
        );
        // proses pembuatan refresh token
        const refreshToken = jwt.sign({ userid, name, email },process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: "1h",
            }
        );
        // Simpan refresh token ke db
        await Users.update({ refresh_token: refreshToken }, {
            where: { id: userid } 
        });
        // kirim token ke client dengan http cookie
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
          // 👇️ jika anda mengunakan https maka anda harus mengaktifkan ini
          // secure: true,
        });
        // jangan lupa kirim respon token nya ke client
        res.json({ accessToken });
        
    } catch (error) {
        res.status(404).json("Email not found");
    }
}