var express = require('express');
var router = express.Router();
const modeloController = require('../controllers/modeloController');

/* GET home page. */
router.get('/', modeloController.getModelos);
router.get('/:id', modeloController.getModelo);
router.post('/:id', modeloController.setModelo);
router.post('/', modeloController.createModelo);
router.delete('/:id', modeloController.deleteModelo);

module.exports = router;