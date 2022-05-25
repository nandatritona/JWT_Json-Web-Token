import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const authToken = req.headers['authorization'];
    const token = authToken && authToken.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);
        req.email = decoded.email;
        next();
    });
}