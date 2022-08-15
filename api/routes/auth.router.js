import express from "express";
import AuthController from "../controller/auth.controller.js";
import {isUser} from "../middleware/JwtUtil.js";

const router = express.Router();

router.post('/register', AuthController.register);

router.post('/login', AuthController.login);

router.post('/reset', isUser, AuthController.resetPassword);

router.post('/forget', isUser, AuthController.forgetPassword);


export default router;