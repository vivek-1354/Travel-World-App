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

router.post('/login', (req, res) => {
    User.findOne({ number: req.body.number })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const bytes = cryptoJs.AES.decrypt(user.password, 'mySecretKey');
            const originalPassword = bytes.toString(cryptoJs.enc.Utf8);
            if (originalPassword !== req.body.password) {

                return res.status(400).json({ message: 'Invalid credentials' });
            }
            const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, 'mySecretKey', { expiresIn: '1h' });
            const { password, ...info } = user._doc;
            res.json({ ...info, accessToken });
        })
})

module.exports = router;            