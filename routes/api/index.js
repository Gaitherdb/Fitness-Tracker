const router = require('express').Router();
const cardioRoutes = require('./cardioRoutes');
const resistanceRoutes = require('./resistanceRoutes');


router.use('/cardio', cardioRoutes);
router.use('/resistance', resistanceRoutes);




module.exports = router;
