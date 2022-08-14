import UserModel from "../models/User.model.js";
import {
    CREATE_USER,
    DELETE_USER,
    GET_ALL_USER,
    GET_USER_BY_ID,
    UPDATE_USER_BY_ID
} from "../_responses/user.response.js";

class UserController {

    getAllUser = async (req, res) => {
        try {
            const users = await UserModel.find();
            return res.status(200).json(GET_ALL_USER.SUCCESS(users));
        } catch (error) {
            return res.status(500).json(GET_ALL_USER.FAILURE(error));
        }
    };

    getUserById = async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id);
            if (user) {
                return res.status(200).json(GET_USER_BY_ID.SUCCESS(user));
            } else {
                return res.status(404).json(GET_USER_BY_ID.FAILURE("Not found User by id:" + req.params.id));
            }

        } catch (error) {
            return res.status(500).json(GET_USER_BY_ID.FAILURE(error));
        }
    };

    createUser = async (req, res) => {
        const newUser = new UserModel(req.body);
        try {
            const user = await newUser.save();
            return res.status(200).json(CREATE_USER.SUCCESS(user));
        } catch (error) {
            return res.status(500).json(CREATE_USER.FAILURE(error));
        }
    };

    updateUserById = async (req, res) => {
        try {
            const user = await UserModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            if (user) {
                return res.status(200).json(UPDATE_USER_BY_ID.SUCCESS(user));
            } else {
                return res.status(404).json(UPDATE_USER_BY_ID.FAILURE("Not found User by id:" + req.params.id));
            }
        } catch (error) {
            return res.status(500).json(UPDATE_USER_BY_ID.FAILURE(error));
        }
    };

    deleteUserById = async (req, res) => {
        try {
            const user = await UserModel.findByIdAndDelete(req.params.id);
            if (user) {
                return res.status(200).json(DELETE_USER.SUCCESS(user));
            } else {
                return res.status(404).json(DELETE_USER.FAILURE("Not found User by id:" + req.params.id));
            }
        } catch (error) {
            return res.status(500).json(DELETE_USER.FAILURE(error));
        }
    };
}

export default new UserController;