const models = require('../models')
const Pais = models.Pais;

getPais = async (req, res, next) => {
    try {
        const paises = await Pais.findAll();
        res.json(paises);
    } catch (error) {
        res.send(error);
    }
}

getPais = async (req, res, next) => {
    try {
        const pais = await Pais.findOne({
            where: {
                id: req.params.id
            }
        });
        res.send(pais);
    } catch (error) {
        res.send(error);
    }
}

setPais = async (req, res, next) => {
    try {
        const pais = await Pais.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.json(pais);
    } catch (error) {
        res.send(error);
    }
}

createPais = async (req, res, next) => {
    try {
        const pais = await Pais.create(req.body);
        res.json(pais);
    } catch (error) {
        res.send(error);
    }
}

deletePais = async (req, res, next) => {
    try {
        const pais = await Pais.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({eliminado:req.params.id});
    } catch (error) {
        res.send(error);
    }
}

module.exports = { getPais, getPais, setPais, createPais, deletePais };