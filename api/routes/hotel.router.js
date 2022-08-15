import express from "express";
import HotelController from "../controller/hotel.controller.js";
import {isAdmin} from "../middleware/JwtUtil.js";

const router = express.Router();

router.get('/', HotelController.getAllHotel);

router.get("/:id", HotelController.getHotelById);

router.post('/', isAdmin, HotelController.createHotel);

router.delete("/:id", isAdmin, HotelController.deleteHotelById);

router.put('/:id', isAdmin, HotelController.updateHotelById);


export default router;