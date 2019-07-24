const chai = require('chai');
const app = require('../src/server.js');
const expect = chai.expect;

describe('I work!', () => {
  it('should not find this fake route', async () => {
    const res = await chai.request(app).get('/somenonexistantroute');
    expect(res.status).to.eq(404);
  });
});

