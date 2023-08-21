const models = require('../models')
const Ciudad = models.Ciudad;

getCiudades = async (req, res, next) => {
    try {
        const ciudades = await Ciudad.findAll();
        res.json(ciudades);
    } catch (error) {
        res.send(error);
    }
}

getCiudad = async (req, res, next) => {
    try {
        const ciudad = await Ciudad.findOne({
            where: {
                id: req.params.id
            }
        });
        res.send(ciudad);
    } catch (error) {
        res.send(error);
    }
}

setCiudad = async (req, res, next) => {
    try {
        const ciudad = await Ciudad.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.json(ciudad);
    } catch (error) {
        res.send(error);
    }
}

createCiudad = async (req, res, next) => {
    try {
        const ciudad = await Ciudad.create(req.body);
        res.json(ciudad);
    } catch (error) {
        res.send(error);
    }
}

deleteCiudad = async (req, res, next) => {
    try {
        const ciudad = await Ciudad.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({eliminado:req.params.id});
    } catch (error) {
        res.send(error);
    }
}

module.exports = { getCiudades, getCiudad, setCiudad, createCiudad, deleteCiudad };