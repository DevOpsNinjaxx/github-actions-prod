// app.test.js

const request = require('supertest');
const app = require('../index'); // Assuming your Express app logic is in index.js

describe('GET /', () => {
  it('responds with "Hello World! making a small test"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
