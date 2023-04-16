const mongoose = require('mongoose');
// ! to add required validations reference week 5 s 2
 
const PMSchema = new mongoose.Schema({
    product: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
},{timestamps: true});
// ! timestamps is talked about in week 4 s 3
 
const ProductManager = mongoose.model('ProductManager', PMSchema);
 
module.exports = ProductManager;
