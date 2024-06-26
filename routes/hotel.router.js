const express = require('express');
const router = express.Router();
const Hotel = require('../model/hotel.model');


router.get('/', async (req, res) => {
    const hotelCategory = req.query.category   //https://localhost:8000/api/hotels?category=National+park
    try {
        let hotels
        if (hotelCategory) {
            hotels = await Hotel.find({ category: hotelCategory })
        } else {
            hotels = await Hotel.find()
        }
        res.json(hotels)
    } catch (error) {
        console.log(error)
    }
});


// Export the router
module.exports = router;