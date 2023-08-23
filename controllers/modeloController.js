const models = require('../models')
const Modelo = models.Modelo;

getModelos = async (req, res, next) => {
    try {
        const modelos = await Modelo.findAll();
        res.json(modelos);
    } catch (error) {
        res.send(error);
    }
}

getModelo = async (req, res, next) => {
    try {
        const modelo = await Modelo.findOne({
            where: {
                id: req.params.id
            }
        });
        res.send(modelo);
    } catch (error) {
        res.send(error);
    }
}

setModelo = async (req, res, next) => {
    try {
        const modelo = await Modelo.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.json(modelo);
    } catch (error) {
        res.send(error);
    }
}

createModelo = async (req, res, next) => {
    try {
        const modelo = await Modelo.create(req.body);
        res.json(modelo);
    } catch (error) {
        res.send(error);
    }
}

deleteModelo = async (req, res, next) => {
    try {
        const modelo = await Modelo.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({eliminado:req.params.id});
    } catch (error) {
        res.send(error);
    }
}

module.exports = { getModelos, getModelo, setModelo, createModelo, deleteModelo };