import express from "express";
import RoomController from "../controller/room.controller.js";
import {isAdmin} from "../middleware/JwtUtil.js";

const router = express.Router();

router.get('/', RoomController.getAllRoom);

router.get("/:id", RoomController.getRoomById);

router.post('/:hotelId', isAdmin, RoomController.createRoom);

router.delete("/:id/:hotelId", isAdmin, RoomController.deleteRoomById);

router.put('/:id', isAdmin, RoomController.updateRoomById);


export default router;