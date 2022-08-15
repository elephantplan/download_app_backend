var express = require('express');
var router = express.Router();

const downloadController= require('../src/controller/downloadController')

/* GET home page. */
router.post('/', downloadController.downloadFileFronDriveController);

router.post('/check', downloadController.checkFileExist);


module.exports = router;
