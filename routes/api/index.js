const router = require('express').Router();
const workoutRoutes = require('./workout');
// const resistanceRoutes = require('./resistanceRoutes');


router.use('/workout', workoutRoutes);
// router.use('/resistance', resistanceRoutes);




module.exports = router;
