const express = require('express');
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/session' , sessionController.create);

routes.get('/ong' , ongController.index);
routes.post('/ong', ongController.create);

routes.get('/profile', incidentController.listForOng);

routes.get('/incident', incidentController.index);
routes.post('/incident', incidentController.create);
routes.delete('/incident/:id', incidentController.delete);

module.exports = routes;