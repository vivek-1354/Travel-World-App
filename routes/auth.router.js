const express = require('express');
const User = require('../model/user.model');
const router = express.Router();

const cryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');


router.post('/register', (req, res) => {
    const { username, number, email } = req.body;
    const password = cryptoJs.AES.encrypt(req.body.password, 'mySecretKey').toString();
    const user = new User({ username, number, email, password });
    user.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
});

module.exports = router;            