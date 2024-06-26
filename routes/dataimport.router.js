const express = require('express');
const router = express.Router();

const Hotel = require('../model/hotel.model');

const hotels = require('../data/hotels');

// GET all DataImport


router.post("/", async (req, res) => {
    try {
        // await Hotel.replaceOne()
        const hotelsInDB = await Hotel.insertMany(hotels.data)
        res.json(hotelsInDB)
    } catch (error) {
        console.log(error)
        res.json({ message: "Something went wrong" })
    }
}
);


module.exports = router;