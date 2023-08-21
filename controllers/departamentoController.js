const models = require('../models')
const Departamento = models.Departamento;

getDepartamentos = async (req, res, next) => {
    try {
        const departamentos = await Departamento.findAll();
        res.json(departamentos);
    } catch (error) {
        res.send(error);
    }
}

getDepartamento = async (req, res, next) => {
    try {
        const departamento = await Departamento.findOne({
            where: {
                id: req.params.id
            }
        });
        res.send(departamento);
    } catch (error) {
        res.send(error);
    }
}

setDepartamento = async (req, res, next) => {
    try {
        const departamento = await Departamento.update(
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

createDepartamento = async (req, res, next) => {
    try {
        const departamento = await Departamento.create(req.body);
        res.json(departamento);
    } catch (error) {
        res.send(error);
    }
}

deleteDepartamento = async (req, res, next) => {
    try {
        const departamento = await Departamento.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({eliminado:req.params.id});
    } catch (error) {
        res.send(error);
    }
}

module.exports = { getDepartamentos, getDepartamento, setDepartamento, createDepartamento, deleteDepartamento };