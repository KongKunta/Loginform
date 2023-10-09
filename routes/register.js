const express = require('express');
const router = express.Router();
const { connect } = require('../db/mongoose');
const saveUser = require('../db/saveUser');
const encryptPassword = require('../middleware/encryptMiddleware');

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.render('register')
})
.use(encryptPassword)
.post('/', async (req, res) => {
    const { username, password } = req.body;
    try {
        connect();
        await saveUser(username, password);
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.render('register', { error: error });
    }
    });
module.exports = router;