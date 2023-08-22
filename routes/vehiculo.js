var express = require('express');
var router = express.Router();
const vehiculoController = require('../controllers/vehiculoController');

/* GET home page. */
router.get('/', vehiculoController.getVehiculos);
router.get('/:id', vehiculoController.getVehiculo);
router.post('/:id', vehiculoController.setVehiculo);
router.post('/', vehiculoController.createVehiculo);
router.delete('/:id', vehiculoController.deleteVehiculo);

module.exports = router;