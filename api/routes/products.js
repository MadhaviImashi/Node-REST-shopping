const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const Product = require('../models/product');

router.get('/', async (req, res, next) => {
    console.log('inside get products');
    const all = await Product.find()
    res.status(200).json({
        message: 'Handling GET request',
        products: all
    })
})

router.post('/', (req, res, next) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price
    });

    product.save()
        .then((result) => {
            console.log(result);
            res.status(201).json({
                message: 'Handling POST request',
                newlyAddedProduct: product
            })
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({
                error: err.message
            });
    })
})

router.get('/: prodID', async (req, res, next) => {
    const id = req.params.prodID;
    const doc = await Product.findById(id)
        console.log('from db: ', doc);
        // if (doc) {
        //     res.status(200).json({doc})
        // } else {
        //     res.status(404).json({
        //         message: 'No valid entry from for this product id'
        //     })
        // }
    res.send(doc);
})

router.put('/:prodID', (req, res, next) => {
    res.status(201).json({
        message: 'Handling PUT request'
    })
})

router.delete('/:prodID', (req, res, next) => {
    res.status(201).json({
        message: 'Handling DELETE request'
    })
})

module.exports = router;