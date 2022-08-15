import RoomModel from "../models/Room.model.js";
import HotelModel from "../models/Hotel.model.js";

import {
    CREATE_ROOM,
    DELETE_ROOM,
    GET_ALL_ROOM,
    GET_ROOM_BY_ID,
    UPDATE_ROOM_BY_ID
} from "../_responses/room.response.js";

class RoomController {

    getAllRoom = async (req, res) => {
        try {
            const rooms = await RoomModel.find();
            return res.status(200).json(GET_ALL_ROOM.SUCCESS(rooms));
        } catch (error) {
            return res.status(500).json(GET_ALL_ROOM.FAILURE(error));
        }
    };

    getRoomById = async (req, res) => {
        try {
            const room = await RoomModel.findById(req.params.id);
            if (room) {
                return res.status(200).json(GET_ROOM_BY_ID.SUCCESS(room));
            } else {
                return res.status(404).json(GET_ROOM_BY_ID.FAILURE("Not found Room by id:" + req.params.id));
            }
        } catch (error) {
            return res.status(500).json(GET_ROOM_BY_ID.FAILURE(error));
        }
    };

    createRoom = async (req, res) => {
        const hotelId = req.params.hotelId;
        const newRoom = new RoomModel(req.body);
        try {
            const saveRoom = await newRoom.save();
            try {
                await HotelModel.findByIdAndUpdate(
                    hotelId,
                    {$push: {rooms: saveRoom._id}}
                )
            } catch (error) {
                return res.status(500).json(CREATE_ROOM.FAILURE(error));
            }
            return res.status(200).json(CREATE_ROOM.SUCCESS(saveRoom));
        } catch (error) {
            return res.status(500).json(CREATE_ROOM.FAILURE(error));
        }
    };

    updateRoomById = async (req, res) => {
        try {
            const room = await RoomModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            if (room) {
                return res.status(200).json(UPDATE_ROOM_BY_ID.SUCCESS(room));
            } else {
                return res.status(404).json(UPDATE_ROOM_BY_ID.FAILURE("Not found Room by id:" + req.params.id));
            }
        } catch (error) {
            return res.status(500).json(UPDATE_ROOM_BY_ID.FAILURE(error));
        }
    };

    deleteRoomById = async (req, res) => {
        const hotelId = req.params.hotelId;
        const id = req.params.id;
        try {
            await RoomModel.findByIdAndDelete(id);
            try {
                await HotelModel.findByIdAndUpdate(
                    hotelId,
                    {$pull: {rooms: id}}
                )
            } catch (error) {
                return res.status(500).json(DELETE_ROOM.FAILURE(error));
            }
            return res.status(200).json(DELETE_ROOM.SUCCESS(null));
        } catch (error) {
            return res.status(500).json(DELETE_ROOM.FAILURE(error));
        }
    };
}

export default new RoomController;