const request = require('supertest');
const app = require('./app');

describe('GET /customers', () => {
  it('should return a list of customers', async () => {
    const res = await request(app).get('/customers');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(expect.any(Array));
  });
});

describe('POST /customer', () => {
  it('should create a new customer', async () => {
    const res = await request(app).post('/customer').send({
      name: 'John Doe'
    });
    expect(res.statusCode).toEqual(201);
  });
});
