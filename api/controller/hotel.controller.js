import HotelModel from "../models/Hotel.model.js";

class HotelController {

    getAllHotel = async (req, res) => {
        try {
            const hotels = await HotelModel.find();
            return res.status(200).json(hotels);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getHotelById = async (req, res) => {
        try {
            const hotel = await HotelModel.findById(req.params.id);
            return res.status(200).json(hotel);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    createHotel = async (req, res) => {
        const newHotel = new HotelModel(req.body);
        try {
            const hotel = await newHotel.save();
            return res.status(200).json(hotel);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    updateHotelById = async (req, res) => {
        try {
            const hotel = await HotelModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            return res.status(200).json(hotel);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    deleteHotelById = async (req, res) => {
        try {
            const hotel = await HotelModel.findByIdAndDelete(req.params.id);
            return res.status(200);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default new HotelController;