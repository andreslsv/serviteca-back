const models = require('../models')
const Departamentos = models.Departamentos;

getDepartamentos = async (req, res, next) => {
    try {
        const departamentos = await Departamentos.findAll();
        res.json(departamentos);
    } catch (error) {
        res.send(error);
    }
}

getDepartamentos = async (req, res, next) => {
    try {
        const departamento = await Departamentos.findOne({
            where: {
                id: req.params.id
            }
        });
        res.send(departamento);
    } catch (error) {
        res.send(error);
    }
}

setDepartamentos = async (req, res, next) => {
    try {
        const departamento = await Departamentos.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.json(departamento);
    } catch (error) {
        res.send(error);
    }
}

createDepartamentos = async (req, res, next) => {
    try {
        const departamento = await Departamentos.create(req.body);
        res.json(departamento);
    } catch (error) {
        res.send(error);
    }
}

deleteDepartamentos = async (req, res, next) => {
    try {
        const departamento = await Departamentos.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({eliminado:req.params.id});
    } catch (error) {
        res.send(error);
    }
}

module.exports = { getDepartamentos, getDepartamentos, setDepartamentos, createDepartamentos, deleteDepartamentos };