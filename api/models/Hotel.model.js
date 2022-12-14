import mongoose from 'mongoose';

const {Schema} = mongoose;

const hotelSchema = new Schema(
    {
        name: {type: String, require: true},
        type: {type: String, require: true},
        city: {type: String, require: true},
        address: {type: String, require: true},
        distance: {type: String, require: true},
        photos: {type: [String]},
        title: {type: String, require: true},
        description: {type: String, require: true},
        rating: {type: Number, require: true, default: 0, max: 5},
        rooms: {type: [String]},
        cheapestPrice: {type: Number, require: true},
        featured: {type: Boolean, default: false}
    }, {
        timestamps: true
    }
);
export default mongoose.model('Hotels', hotelSchema);