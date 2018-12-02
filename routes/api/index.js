const express = require('express');
const router = express.Router();
const reservationRoute = require('./reservation');

router.use('/reservation', reservationRoute);

module.exports = router;
