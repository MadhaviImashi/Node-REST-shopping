const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request'
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST request'
    })
})

router.get('./: prodID', (req, res, next) => {
    const id = req.params.prodID;
    if (id === 'special') {
        res.status(200).json({
            message: ' YO discovered the special id',
            id: id
       })
    } else {
        res.status(200).json({
            message: 'yo passed an id'
        })
    }
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