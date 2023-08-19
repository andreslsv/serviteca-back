var express = require('express');
var router = express.Router();
const propietarioController = require('../controllers/propietarioController');

/* GET home page. */
router.get('/', propietarioController.getPropietarios);
router.get('/:id', propietarioController.getPropietario);
router.post('/:id', propietarioController.setPropietario);
router.post('/', propietarioController.createPropietario);
router.delete('/:id', propietarioController.deletePropietario);

module.exports = router;