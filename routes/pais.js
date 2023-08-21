var express = require('express');
var router = express.Router();
const paisController = require('../controllers/paisController');

/* GET home page. */
router.get('/', paisController.getPaises);
router.get('/:id', paisController.getPais);
router.post('/:id', paisController.setPais);
router.post('/', paisController.createPais);
router.delete('/:id', paisController.deletePais);

module.exports = router;