var express = require('express');
var router = express.Router();
const propietarioController = require('../controllers/propietarioController');

/* GET home page. */
router.get('/', propietarioController.getPropietarios);

module.exports = router;