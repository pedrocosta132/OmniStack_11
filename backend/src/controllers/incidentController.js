const connection = require('../database/connection');

module.exports = {
    //LIST ALL
    async index(req , res){
        const { page = 1 } = req.query;

        const [count] = await connection('incident').count();

        const list = await connection('incident')
        .join('ong', 'ong.id', '=' , 'incident.id_ong')
        .limit(5)
        .offset((page - 1)*5)
        .select([
            'incident.*',
            'ong.email',
            'ong.city'
        ]);

        res.header('X-Total-Count' , count['count(*)']);

        return res.json(list);
    },

    //LIST FOR ONG
    async listForOng(req , res){
        const id_ong = req.headers.authorization;

        const list = await connection('incident')
        .where('id_ong', id_ong)
        .select('*');

        return res.json(list);
    },

    //CREATE
    async create(req, res){
        const {title, description, value} = req.body;
        const id_ong = req.headers.authorization;

        const [id] = await connection('incident').insert({
            title,
            description,
            value,
            id_ong
        });

        return res.json({ id });
    },

    //DELETE
    async delete(req , res){
        const { id } = req.params;
        const id_ong = req.headers.authorization;

        const incident = await connection('incident')
        .where('id', id)
        .select('id_ong')
        .first();

        if(incident.id_ong !== id_ong)
            return res.status(401).json({ error: 'Operation not permitted.' });

        await connection('incident').where('id', id).delete();

        return res.status(204).send();
    }
}