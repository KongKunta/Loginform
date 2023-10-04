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
    console.log(resultPassword)
});

module.exports = router;