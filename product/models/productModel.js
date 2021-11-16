const mongoose = require('mongoose');
const { isNumber } = require('util');
const productSchema = new mongoose.Schema({
    name: {
        type:String
    },
    price: {
        type:Number
    },
    detail:{
        type:String
    } 
        
},{
    collection: 'productMEAN'
});
const product = mongoose.model('product', productSchema);
module.exports = product;