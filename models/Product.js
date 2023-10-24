const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    _id: false,
    prodName: String,
    prodDesc: String,
    prodPrice: Number,
    updatedAt: { type: Date, default: Date.now },
    __v: false,
})

module.exports = mongoose.model('Product', ProductSchema)