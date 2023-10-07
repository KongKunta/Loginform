const express = require('express');
const router = express.Router();
const comparePassword = require('../compareBcrypt');
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
    res.cookie('username', req.body.username);
    res.redirect('/user/' + req.body.username);
});

module.exports = router;