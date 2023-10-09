const express = require('express');
const router = express.Router();
const comparePassword = require('../middleware/compareBcrypt');
const { connect } = require('../db/mongoose');
const findUser = require('../db/findUser');


router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.render('loginform')
})
.post('/', async (req, res) => {
    connect();
    const user = await findUser(req.body.username)
    if (!user) {
        res.render('loginform', { error: 'User not found' });
        return;
    }
    const resultPassword = await comparePassword(req.body.password, user.password)
    if (!resultPassword) {
        res.status(401).render('loginform', { error: 'Wrong password' });
        return;
    }
    // sender enn cookie med brugernavn som bruges på user til at validere.
    // res.cookie('username', req.body.username);
    req.session.userId = user._id;
    res.redirect('/user/' + req.body.username);
});

module.exports = router;