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
};

export const verifyToken = (req, res, next) => {
    const authorizationHeader = req.headers['authorization']
    if (!authorizationHeader) {
        return res.status(401).json("You are not authentication!");
    }
    const token = authorizationHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json("You are not authentication!");
    } else {
        jwt.verify(token, process.env.SECRET_KEY_JWT, (err, user) => {
            if (err) {
                return res.status(403).json(err);
            }
            req.user = user;
            next()
        });
    }
};

export const isUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.data.id === req.params.id || req.user.data.isAdmin) {
            next()
        } else {
            return res.status(403).json("You are not authorized!")
        }
    })
};

export const isAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.data.isAdmin) {
            next()
        } else {
            return res.status(403).json("You are not authorized!")
        }
    })
};