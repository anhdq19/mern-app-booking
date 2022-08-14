import mongoose from 'mongoose';

const {Schema} = mongoose;

const userSchema = new Schema({
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    isAdmin: {type: Boolean, default: false}
}, {timestamps: true});

export default mongoose.model('User', userSchema);