'use strict';

const { app } = require('egg-mock/bootstrap');

describe('qingshansima test', () => {
  it('qingshansima index', () => {
    return app.httpRequest()
      .get('/my')
      .expect(200)
      .expect('<h1>I am  qingshansima</h1>');
  });
  it('qingshansima getGirls', async () => {
    await app.httpRequest()
      .get('/getGirls')
      .expect(200)
      .expect('<h1>杨幂，正在向你走来</h1>');
  });
});
