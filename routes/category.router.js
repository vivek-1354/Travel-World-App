const express = require('express');
const router = express.Router();
const Category = require('../model/category.model');


router.get('/', async (req, res) => {
    try {
        const categories = await Category.find()
        res.json(categories)
    } catch (error) {
        console.log(error)
    }
});

// Export the router
module.exports = router;