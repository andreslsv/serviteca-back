var express = require('express');
var router = express.Router();
const departamentoController = require('../controllers/departamentoController');

/* GET home page. */
router.get('/', departamentoController.getDepartamentos);
router.get('/:id', departamentoController.getDepartamento);
router.post('/:id', departamentoController.setDepartamento);
router.post('/', departamentoController.createDepartamento);
router.delete('/:id', departamentoController.deleteDepartamento);

module.exports = router;