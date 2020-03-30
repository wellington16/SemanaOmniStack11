const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')


const OngControler = require('./controllers/OngController')
const IncidentsControler = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

// recursos da ONG
routes.get('/ongs',OngControler.index)

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp:Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}),OngControler.create)

// recursos dos Incidents
routes.post('/incidents', IncidentsControler.create)
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}) , IncidentsControler.index)

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),IncidentsControler.delete)

// recursos do Profile
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index)

// recurso da Session
routes.post('/sessions', SessionController.create) 

module.exports = routes