const connection = require('../database/connection');

module.exports = {
    async create(req , res){
        const { id } = req.body;

        const ong = await connection('ong')
        .where('id', id)
        .select('name')
        .first();

        if(!ong)
            res.status(400).json({ error: 'No ONG found with specific id.'});

        return res.json(ong);
    }
}