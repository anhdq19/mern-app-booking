import express from "express";
import HotelController from "../controller/hotel.controller.js";

const router = express.Router();

router.get('/', HotelController.getAllHotel);

router.get("/:id", HotelController.getHotelById);

router.post('/', HotelController.createHotel);

router.delete("/:id", HotelController.deleteHotelById);

router.put('/:id', HotelController.updateHotelById);


export default router;