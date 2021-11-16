const productRoute = require('express').Router();
const Product = require('../models/productModel');

productRoute.get('/product',async (req, res) => {
    const data = await Product.find();
    res.status(200).json(data);
});
productRoute.get('/product/:id', async (req,res)=>{
    const data = await Product.findById(req.params.id);
    if(data){
        res.status(200).json(data);
    }
    else{
        res.status(400).send(`not found ${req.params.id} `);
    }
});
productRoute.post('/product/add', async (req, res) =>{
    const {name,price,detail} = req.body;
    const data = await Product.create({name,price,detail});
    if(data){
        res.status(201).json(data);
    }
    else{
        res.status(400).send('cannot Create');
    }
});
productRoute.put('/product/edit/:id', async (req, res) =>{
    const data = await Product.findByIdAndUpdate(req.params.id,{$set:req.body});
    if(data){
        res.status(200).json(data);
    }
    else{
        res.status(400).send('cannot update');
    }
});
productRoute.delete('/product/delete/:id', async(req,res) =>{
    const data = await Product.findOneAndDelete(req.params.id);
    if(data){
        res.status(200).json(data);
    }
    else{
        res.status(400).send('cannot delete');
    }
});

module.exports = productRoute;