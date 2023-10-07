const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/:username', (req, res) => {
    if (req.cookies.username === req.params.username) {
        res.render('user', { username: req.params.username });
        return;
    }
    res.redirect('/login');
})


module.exports = router;