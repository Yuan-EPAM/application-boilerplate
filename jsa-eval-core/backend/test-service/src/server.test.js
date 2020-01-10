const request = require('supertest');
const server = require('./server');

describe('express service', () => {
  it('returns mock data extract from json-placeholder api', async () => {
    const expectedData = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    };
    const res = await request(server).get('/jsa');
    const { title } = res.body;
    expect(title).toEqual(expectedData.title);
  });
});
