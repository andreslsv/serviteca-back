var express = require('express');
var router = express.Router();
const marcaController = require('../controllers/marcaController');

/* GET home page. */
router.get('/', marcaController.getMarcas);
router.get('/:id', marcaController.getMarca);
router.post('/:id', marcaController.setMarca);
router.post('/', marcaController.createMarca);
router.delete('/:id', marcaController.deleteMarca);

module.exports = router;