import jwt from "jsonwebtoken";


export const generateToken = (user) => {
    const userData = {
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin
    }
    return jwt.sign(
        {
            data: userData
        },
        process.env.SECRET_KEY_JWT,
        {
            algorithm: 'HS256',
            expiresIn: '7d'
        }
    );
}
export const verifyToken = (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    const token = authorizationHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json("You are not authentication!");
    }
    jwt.verify(token, process.env.SECRET_KEY_JWT, (err, user) => {
        if (err) {
            return res.status(403).json("Token is not valid!");
        }
        req.user = user;
        next()
    });

};
