const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/:username', async (req, res) => {
    // logik for at tjekke om brugeren er logget ind
    // if (req.cookies.username === req.params.username) {
    //     res.render('user', { username: req.params.username });
    //     return;
    // }
    // res.redirect('/login');
    if (req.session.username === req.params.username) {
        res.render('user', { username: req.params.username });
        return;
    }
    res.redirect('/login');
})


module.exports = router; 