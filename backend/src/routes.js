const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/session' , sessionController.create);

routes.get('/ong' , ongController.index);

routes.post('/ong', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        cellphone: Joi.string().required().min(9).max(12),
        city: Joi.string().required(),
        postal: Joi.string().required().min(4).max(7)
    })
}) , ongController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}) , incidentController.listForOng);

routes.get('/incident' , celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}) , incidentController.index);

routes.post('/incident', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    })
}) , incidentController.create);

routes.delete('/incident/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}) , incidentController.delete);

module.exports = routes;