const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/:username', (req, res) => {
    res.send('User: ' + req.params.username)
})

router.post('/:username', (req, res) => {
    res.send('User: ' + req.params.username)
})

module.exports = router;