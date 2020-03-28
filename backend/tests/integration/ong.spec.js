const req = require('supertest');
const app = require('../../src/app');
const con = require('../../src/database/connection');

describe('ONG tests', () => {
    beforeEach(async () => {
        await con.migrate.rollback();
        await con.migrate.latest();
    });
    afterAll(async () => {
        await con.destroy();
    })

    it('should create a new ONG', async () => {
        const res = await req(app)
            .post('/ong')
            .send({
                name : "This ONG",
                email: "adm@ong.pt",
                cellphone: "910123123",
                city: "Porto",
                postal: "4000"
            });
        
        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8);
            
    });
})