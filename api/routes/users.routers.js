import express from "express";
import UserController from "../controller/user.controller.js";
import {verifyToken} from "../middleware/JwtUtil.js";

const router = express.Router();

router.get('/', verifyToken, UserController.getAllUser);

router.get("/:id", UserController.getUserById);

router.post('/', UserController.createUser);

router.delete("/:id", UserController.deleteUserById);

router.put('/:id', UserController.updateUserById);


export default router;