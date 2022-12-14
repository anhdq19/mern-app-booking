import UserModel from "../models/User.model.js";
import {LOGIN, REGISTER, RESET_PASSWORD} from "../_responses/auth.response.js";
import {generateToken} from "../middleware/JwtUtil.js";
import bcrypt from "bcryptjs"

class AuthController {

    register = async (req, res) => {
        const isExist = await UserModel.findOne({email: req.body.email});

        if (isExist) {
            return res.status(400).json(REGISTER.FAILURE("Email is existed!"))
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(req.body.password, salt);
            const newUser = new UserModel({...req.body, password: hashPassword});
            try {
                const user = await newUser.save();
                const {password, isAdmin, ...other} = user["_doc"]
                return res.status(200).json(REGISTER.SUCCESS({...other}));
            } catch (error) {
                return res.status(500).json(REGISTER.FAILURE(error));
            }
        }
    };

    login = async (req, res) => {
        try {
            const user = await UserModel.findOne({email: req.body.email});
            if (!user) {
                return res.status(400).json(LOGIN.FAILURE("Not found account with email: " + req.body.email))
            } else {
                const checkPassword = await bcrypt.compareSync(req.body.password, user["password"]);
                if (checkPassword) {
                    const token = generateToken(user);
                    const {password, isAdmin, ...other} = user["_doc"]
                    return res.status(200)
                        .json(LOGIN.SUCCESS({
                            ...other, accessToken: token
                        }));
                } else {
                    return res.status(401).json(LOGIN.FAILURE("Password is wrong!"));
                }
            }
        } catch (error) {
            return res.status(500).json(LOGIN.FAILURE(error))
        }
    };

    resetPassword = async (req, res) => {
        // try {
        //     const user = await UserModel.findOne({email: req.body.email});
        //     if (!user) {
        //         return res.status(400).json(RESET_PASSWORD.FAILURE("Not found account with email: " + req.body.email))
        //     } else {
        //         const checkPassword = await bcrypt.compareSync(req.body.password, user["password"]);
        //         if (checkPassword) {
        //             const token = generateToken(user);
        //             const {password, isAdmin, ...other} = user["_doc"]
        //             return res.status(200)
        //                 .json(LOGIN.SUCCESS({
        //                     ...other, accessToken: token
        //                 }));
        //         } else {
        //             return res.status(401).json(LOGIN.FAILURE("Password is wrong!"));
        //         }
        //     }
        // } catch (error) {
        //     return res.status(500).json(LOGIN.FAILURE(error))
        // }
    };

    forgetPassword = async (req, res) => {
    //     try {
    //         const user = await UserModel.findOne({email: req.body.email});
    //         if (!user) {
    //             return res.status(400).json(LOGIN.FAILURE("Not found account with email: " + req.body.email))
    //         } else {
    //             const checkPassword = await bcrypt.compareSync(req.body.password, user["password"]);
    //             if (checkPassword) {
    //                 const token = generateToken(user);
    //                 const {password, isAdmin, ...other} = user["_doc"]
    //                 return res.status(200)
    //                     .json(LOGIN.SUCCESS({
    //                         ...other, accessToken: token
    //                     }));
    //             } else {
    //                 return res.status(401).json(LOGIN.FAILURE("Password is wrong!"));
    //             }
    //         }
    //     } catch (error) {
    //         return res.status(500).json(LOGIN.FAILURE(error))
    //     }
    };

}

export default new AuthController;