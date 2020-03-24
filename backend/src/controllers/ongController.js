const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    //List
    async index(req , res){
         const list = await connection('ong').select('*');
    
        return res.json( list );
    },

    //Create
    async create(req , res){
        const {name, email, cellphone, city, postal} = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ong').insert({
            id,
            name,
            email,
            cellphone,
            city,
            postal
        });

        return res.json({ id });
    }
}