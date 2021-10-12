const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    address: String,
    phone_number: String,
    kakao_id: String,
    email: String,
    profile_image_url: String,
    username: String,
    password: String,
    zip_code: String,
    score: Number,
    items_list : Array
})

module.export = mongoose.model('User', UserSchema);