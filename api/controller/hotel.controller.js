import HotelModel from "../models/Hotel.model.js";
import {
    CREATE_HOTEL,
    DELETE_HOTEL,
    GET_ALL_HOTEL,
    GET_HOTEL_BY_ID,
    UPDATE_HOTEL_BY_ID
} from "../_responses/hotel.response.js";

class HotelController {

    getAllHotel = async (req, res) => {
        try {
            const hotels = await HotelModel.find();
            return res.status(200).json(GET_ALL_HOTEL.SUCCESS(hotels));
        } catch (error) {
            return res.status(500).json(GET_ALL_HOTEL.FAILURE(error));
        }
    };

    getHotelById = async (req, res) => {
        try {
            const hotel = await HotelModel.findById(req.params.id);
            if (hotel) {
                return res.status(200).json(GET_HOTEL_BY_ID.SUCCESS(hotel));
            } else {
                return res.status(404).json(GET_HOTEL_BY_ID.FAILURE("Not found Hotel by id:" + req.params.id));
            }
        } catch (error) {
            return res.status(500).json(GET_HOTEL_BY_ID.FAILURE(error));
        }
    };

    createHotel = async (req, res) => {
        const newHotel = new HotelModel(req.body);
        try {
            const hotel = await newHotel.save();
            return res.status(200).json(CREATE_HOTEL.SUCCESS(hotel));
        } catch (error) {
            return res.status(500).json(CREATE_HOTEL.FAILURE(error));
        }
    };

    updateHotelById = async (req, res) => {
        try {
            const hotel = await HotelModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            if (hotel) {
                return res.status(200).json(UPDATE_HOTEL_BY_ID.SUCCESS(hotel));
            } else {
                return res.status(404).json(UPDATE_HOTEL_BY_ID.FAILURE("Not found Hotel by id:" + req.params.id));
            }
        } catch (error) {
            return res.status(500).json(UPDATE_HOTEL_BY_ID.FAILURE(error));
        }
    };

    deleteHotelById = async (req, res) => {
        try {
            const hotel = await HotelModel.findByIdAndDelete(req.params.id);
            if (hotel) {
                return res.status(200).json(DELETE_HOTEL.SUCCESS(hotel));
            } else {
                return res.status(404).json(DELETE_HOTEL.FAILURE("Not found Hotel by id:" + req.params.id));
            }
        } catch (error) {
            return res.status(500).json(DELETE_HOTEL.FAILURE(error));
        }
    };
}

export default new HotelController;