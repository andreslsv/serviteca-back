const models = require('../models')
const Marca = models.Marca;

getMarcas = async (req, res, next) => {
    try {
        const marcas = await Marca.findAll();
        res.json(marcas);
    } catch (error) {
        res.send(error);
    }
}

getMarca = async (req, res, next) => {
    try {
        const marca = await Marca.findOne({
            where: {
                id: req.params.id
            }
        });
        res.send(marca);
    } catch (error) {
        res.send(error);
    }
}

setMarca = async (req, res, next) => {
    try {
        const marca = await Marca.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.json(marca);
    } catch (error) {
        res.send(error);
    }
}

createMarca = async (req, res, next) => {
    try {
        const marca = await Marca.create(req.body);
        res.json(marca);
    } catch (error) {
        res.send(error);
    }
}

deleteMarca = async (req, res, next) => {
    try {
        const marca = await Marca.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({eliminado:req.params.id});
    } catch (error) {
        res.send(error);
    }
}

module.exports = { getMarcas, getMarca, setMarca, createMarca, deleteMarca };