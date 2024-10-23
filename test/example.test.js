const request = require('supertest');
const { app } = require('../index'); // Asegúrate de exportar correctamente tu app en index.js

describe('GET /api/comidas/:idcomida', () => {
  it('Debería devolver la comida con id 2', async () => {
    const response = await request(app).get('/api/comidas/2');
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      idcomida: 2,
      nombre: "pizza",
      costo: 4000
    });
  });
});
