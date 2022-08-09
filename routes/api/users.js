var express = require('express');
var router = express.Router();
//var adsMiddleware = require('../../middleware/ads')
const userController = require('../../controllers/Users/UserController');
router.get('/', userController.list);
router.get('/GetAll', userController.list);

router.get('/GetByID/:id', userController.show);
router.get('/:id', userController.show);
router.post('/create', userController.create);
router.post('/login', userController.login);
router.put('/Update/:id', userController.update);
router.get('/ReviewUser/:num/:user_id/:reviewedUserId', userController.ReviewUser);
router.delete('/:id', userController.delete);
router.get('/GetByUserName/:username',userController.GetByUserName)

module.exports = router;