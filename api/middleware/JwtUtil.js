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
    let token = req.headers['x-access-token'];
    console.log(req.headers)
    //
    // if (!token) {
    //     return res.status(40).send({
    //         message: 'No token provided!',
    //     });
    // }
    // jwt.verify(token,  process.env.SECRET_KEY_JWT, (err, decoded) => {
    //     if (err) {
    //         return res.status(401).send({
    //             message: 'UnAuthorized!',
    //         });
    //     }
    //     req.userId = decoded.data._id;
    //     next();
    // });
};
