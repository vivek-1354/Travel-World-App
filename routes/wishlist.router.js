const express = require('express');
const Hotel = require('../model/hotel.model');
const Wishlist = require('../model/wishlist.model');
const router = express.Router();


router.post('/', (req, res) => {
    const newWishlist = new Wishlist(req.body)

    newWishlist.save()
        .then(wishlist => {
            Hotel.findById(wishlist.hotelId)
                .then(result => res.status(201).send(result))
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})

module.exports = router
