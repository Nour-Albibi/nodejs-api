var express = require('express');
var router = express.Router();
const url = require('url');
const querystring = require('querystring');
var editorController = require('../../controllers/EditorController');
router.get('/GetGifImages',editorController.index);
//router.get('/AddgifImage', editorController.index);
router.get('/SearchForGifImages',editorController.SearchForGifImages);
module.exports = router;