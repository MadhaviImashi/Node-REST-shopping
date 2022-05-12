const express = require('express');
const app = express();
//to pass the URL encoded body of incomming request as JSON data
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
//create a simple API
// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works!'
//     });
// });
app.use(bodyParser.urlencoded({ extended: false })); //to pass url encoded bodies
app.use(bodyParser.json());//this will extract json data make it easily readable

//if request starts with '/products', then that request will be forwarded to Products.js file
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//if the request URi is none of these routes belongs to products or orders, the below middleware will be executed
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
}) 

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;
