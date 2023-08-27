const models = require('../models');
const Propietario = models.Propietario;
const Vehiculo = models.Vehiculo;
const Modelo = models.Modelo;
const Marca = models.Marca;

getVehiculos = async (req, res, next) => {
    try {
        const vehiculos = await Vehiculo.findAll({
            include: [Propietario, {
                model: Modelo, include: [Marca]
            }]
        });
        res.json(vehiculos);
    } catch (error) {
        res.send(error);
    }
}

getVehiculo = async (req, res, next) => {
    try {
        const vehiculo = await Vehiculo.findOne(
            { include: [Propietario] },
            {
                where: {
                    id: req.params.id
                }
            });
        res.send(vehiculo);
    } catch (error) {
        res.send(error);
    }
}

setVehiculo = async (req, res, next) => {
    try {
        const vehiculo = await Vehiculo.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.json(vehiculo);
    } catch (error) {
        res.send(error);
    }
}

createVehiculo = async (req, res, next) => {
    try {
        const vehiculo = await Vehiculo.create(req.body);
        res.json(vehiculo);
    } catch (error) {
        res.send(error);
    }
}

deleteVehiculo = async (req, res, next) => {
    try {
        const vehiculo = await Vehiculo.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ eliminado: req.params.id });
    } catch (error) {
        res.send(error);
    }
}

module.exports = { getVehiculos, getVehiculo, setVehiculo, createVehiculo, deleteVehiculo };