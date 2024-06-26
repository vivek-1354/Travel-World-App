const express = require('express');
const router = express.Router();

const Hotel = require('../model/hotel.model');

// fetching single hotel using id
// https://localhost:8000/api/hotels/6391d663731339373d16589

router.get('/:id', async (req, res) => {
    const id = req.params.id   //https://localhost:8000/api/hotels?category=National+park
    try {
        // const hotel = await Hotel.find({ _id: new mongo.ObjectId(id) })
        // const hotel = await Hotel.find({ _id: id })
        const hotel = await Hotel.findById(id)
        res.json(hotel)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

module.exports = router;
