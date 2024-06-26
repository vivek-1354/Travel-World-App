const express = require('express');
const hotels = require('../data/hotels');
const router = express.Router();


router.get('/', (req, res) => {
    res.json(hotels.data);
});



// Export the router
module.exports = router;