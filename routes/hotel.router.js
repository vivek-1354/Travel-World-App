const express = require('express');
const router = express.Router();
const Hotel = require('../model/hotel.model');


router.get('/', (req, res) => {
    Hotel.find()
        .then(hotels => res.json(hotels))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Export the router
module.exports = router;