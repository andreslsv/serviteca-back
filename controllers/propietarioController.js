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

getPropietario = async (req, res, next) => {
    try {
        const propietario = await Propietario.findOne({
            where: {
                id: req.params.id
            }
        });
        res.send(propietario);
    } catch (error) {
        res.send(error);
    }
}

setPropietario = async (req, res, next) => {
    try {
        const propietario = await Propietario.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.json(propietario);
    } catch (error) {
        res.send(error);
    }
}

createPropietario = async (req, res, next) => {
    try {
        const propietario = await Propietario.create(req.body);
        res.json(propietario);
    } catch (error) {
        res.send(error);
    }
}

deletePropietario = async (req, res, next) => {
    try {
        const propietario = await Propietario.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({eliminado:req.params.id});
    } catch (error) {
        res.send(error);
    }
}

module.exports = { getPropietarios, getPropietario, setPropietario, createPropietario, deletePropietario };