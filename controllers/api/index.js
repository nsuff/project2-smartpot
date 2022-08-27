const router = require('express').Router();

const userRoutes = require('./user-routes');
const potluckRoutes = require('./potluck-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const foodRoutes = require ('./food-routes');
const foodTypeRoutes = require('./foodType-routes');


router.use('/users', userRoutes);
router.use('/potluck', potluckRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/foods', foodRoutes);
router.use('/foodType', foodTypeRoutes);

module.exports = router;
