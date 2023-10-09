const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/:username', authMiddleware, async (req, res) => {
    res.render('user', { username: req.params.username });
})


module.exports = router; 



// logik for at tjekke om brugeren er logget ind
    // if (req.cookies.username === req.params.username) {
    //     res.render('user', { username: req.params.username });
    //     return;
    // }
    // res.redirect('/login');
    // Logik for at tjekke session om brugeren er logget ind
    // if (req.session.username === req.params.username) {
    //     res.render('user', { username: req.params.username });
    //     return;
    // }
    // res.redirect('/login');