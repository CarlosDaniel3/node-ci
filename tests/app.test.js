const request = require('supertest');
const app = require('../server');

describe('API Tests', () => {

  it('deve retornar status UP no /health', async () => {
    const res = await request(app).get('/health');

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('UP');
  });

  it('deve listar itens', async () => {
    const res = await request(app).get('/items');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});