const generateUniqueId =  require('../utils/generateUniqueId')
const connection = require('../database/connection')
const crypto = require('crypto')


module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs')
            .select('*')
            .catch((err) => { console.log( err); throw err })
        return response.json(ongs)
    },

    async create (request, response) {
        const {name, email, whatsapp, city, uf} = request.body
        
        const id = generateUniqueId()
    
        await connection('ongs').insert({
            id, 
            name, 
            email, 
            whatsapp,
            city, 
            uf
        })
        .catch((err) => 
             { console.log(err); throw err }
        )
        return response.json({ id })
    }
}