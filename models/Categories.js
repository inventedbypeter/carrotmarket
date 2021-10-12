const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
    items: Array,
    category_name: String
})

module.export = mongoose.model('Categories', CategoriesSchema);