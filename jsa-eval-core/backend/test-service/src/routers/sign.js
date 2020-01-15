const Router = require('koa-router');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = new Router();

router.post('/signup', userController.userInsert);
router.post('/signin', authController.signInAuth);

module.exports = router;
