const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtroutes = require('./thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtroutes);

module.exports = router;