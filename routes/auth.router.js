const express = require('express');
const User = require('../model/user.model');
const router = express.Router();


router.post('/register', (req, res) => {
    const { username, number, email, password } = req.body;
    const user = new User({ username, number, email, password });
    user.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
});

module.exports = router;            