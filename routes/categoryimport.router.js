const express = require('express');
const router = express.Router();

const Category = require('../model/category.model');

const categories = require('../data/categories');

// GET all DataImport


router.post("/", async (req, res) => {
    try {
        const categoriesDB = await Category.insertMany(categories.data)
        res.json(categoriesDB)
    } catch (error) {
        console.log(error)
        res.json({ message: "Something went wrong" })
    }
}
);


module.exports = router;