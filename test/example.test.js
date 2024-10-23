const request = require('supertest');
const { app } = require('../index'); 

describe('GET /api/comidas/2', () => {
  it('debería devolver pizza', async () => {
    const res = await request(app).get('/api/comidas/2');  
    expect(res.statusCode).toEqual(200);                 
    expect(res.body).toHaveLength(1);                    
  });
});
