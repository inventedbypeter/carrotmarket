const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    user_id: String,
    photo_image_url: String,
    title: String,
    categories: Array,
    price: String,
    description: String,
    likes: Number
})

module.export = mongoose.model('Item', ItemSchema);