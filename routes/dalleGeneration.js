const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        sucess: true,
        message: 'Gotten Prompt Image',
    });
});

router.post('/', (req, res) => {
    res.status(200).json({
        sucess: true,
        message: 'Posted Prompt Image',
    });
});

module.exports = router;