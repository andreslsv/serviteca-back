const models = require('../models')
const Propietario = models.Propietario;

getPropietarios = async (req, res, next) => {
    try {
        const propietarios = await Propietario.findAll();
        res.json(propietarios);
    } catch (error) {
        res.send(error);
    }
}

module.exports = { getPropietarios };