const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    prodName: String,
    prodDesc: String,
    prodPrice: Number,
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Product', ProductSchema)