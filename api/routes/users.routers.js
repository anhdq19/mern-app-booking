import express from "express";
import UserController from "../controller/user.controller.js";
import {isAdmin, isUser} from "../middleware/JwtUtil.js";

const router = express.Router();

router.get('/', isAdmin, UserController.getAllUser);

router.get("/:id", isUser, UserController.getUserById);

router.post('/', isAdmin, UserController.createUser);

router.delete("/:id", isAdmin, UserController.deleteUserById);

router.put('/:id', isUser, UserController.updateUserById);


export default router;