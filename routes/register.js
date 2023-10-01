const express = require('express');
const router = express.Router();
const { connect } = require('../db/mongoose');
const saveUser = require('../db/saveUser');
const encryptPassword = require('../encryptMiddleware');

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.render('register')
})
.use(encryptPassword)
.post('/', (req, res) => {
    const { username, password } = req.body;
    connect();
    res.send('login post')
    saveUser(username, password);
    });

module.exports = router;