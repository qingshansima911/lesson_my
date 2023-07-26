'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, world';
    // console.log(ctx.session.counter)
  }
  async qingshansima() {
    const { ctx } = this;
    ctx.body = '<h1>Hello qingshansima</h1>';
  }
  async testGetGirl() {
    const ctx = this.ctx;
    let id = ctx.query.id
    const res = await ctx.service.qingshansima.getGirl(id)
    ctx.body = res;
  }
}

module.exports = HomeController;
