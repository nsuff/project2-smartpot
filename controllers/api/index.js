const router = require('express').Router();

const userRoutes = require('./user-routes');
const potluckRoutes = require('./potluck-routes');
const commentRoutes = require('./comment-routes');
const foodRoutes = require ('./food-routes');


router.use('/users', userRoutes);
router.use('/potluck', potluckRoutes);
router.use('/comments', commentRoutes);
router.use('/foods', foodRoutes);

module.exports = router;
