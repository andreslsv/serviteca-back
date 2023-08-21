var express = require('express');
var router = express.Router();
const ciudadController = require('../controllers/ciudadController');

/* GET home page. */
router.get('/', ciudadController.getCiudades);
router.get('/:id', ciudadController.getCiudad);
router.post('/:id', ciudadController.setCiudad);
router.post('/', ciudadController.createCiudad);
router.delete('/:id', ciudadController.deleteCiudad);

module.exports = router;