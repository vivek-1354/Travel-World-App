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

router.delete('/:id', async (req, res) => {
    try {
        await Wishlist.findByIdAndDelete(req.params.id)
        res.json({ message: 'Wishlist deleted' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/', (req, res) => {
    Wishlist.find()
        .then(wishlist => res.json(wishlist))
        .catch(err => res.status(400).json({ message: err.message }))
})

module.exports = router
