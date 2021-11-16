const express = require('express');
const cors = require('cors');
const productRoute = require('./routes/productRoute');
const port = process.env.PRODUCT_PORT || 4000
require('dotenv').config();
require('./config/database').connect();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api',productRoute);

app.listen(port, () =>{
    console.log(`Product server running on Port ${port}`)
});

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})