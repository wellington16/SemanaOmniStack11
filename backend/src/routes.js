const express = require('express')
const OngControler = require('./controllers/OngController')
const IncidentsControler = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

// recursos da ONG
routes.get('/ongs',OngControler.index)
routes.post('/ongs', OngControler.create)

// recursos dos Incidents
routes.post('/incidents', IncidentsControler.create)
routes.get('/incidents', IncidentsControler.index)
routes.delete('/incidents/:id', IncidentsControler.delete)
// recursos do Profile
routes.get('/profile', ProfileController.index)

// recurso da Session
routes.post('/sessions', SessionController.create) 

module.exports = routes