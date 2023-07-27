'use strict';

const Controller = require('egg').Controller;

class QingshansimaController extends Controller {
  async index() {
    const { ctx, app } = this;
    // ctx.body = '<h1>I am  qingshansima</h1>';
    // await ctx.render('qingshansima.html')
    // await ctx.render('qingshansima.html', {
    //   id: 2021,
    //   name: '小红',
    //   age: 18,
    //   skill: '泰式按摩'
    // })
    // await ctx.render(
    //   'qingshansima2.html', {
    //   id: 2021,
    //   name: '小红',
    //   age: 18,
    //   skills: [
    //     '泰式按摩',
    //     '精油搓背',
    //     '水疗SPA'
    //   ]
    // })
    // await ctx.render('qingshansima3.html', {
    //   id: 2021,
    //   name: '小红',
    //   age: 18,
    //   skill: '泰式按摩'
    // })
    //获取Session
    // const username = ctx.session.username
    // await ctx.render(
    //   'qingshansima3.html', {
    //   id: 2021,
    //   name: '小红',
    //   age: 18,
    //   //赋值给模板
    //   username: username,
    //   skill: '泰式按摩'
    // })
    // console.log(ctx.session.counter)

    const username = ctx.session.username
    await ctx.render('qingshansima3.html', {
      // nowTime: app.currentTime(),
      nowTime: app.timeProp(),
      id: 2021,
      name: '小红',
      age: 18,
      //赋值给模板
      username: username,
      skill: '泰式按摩'
    })
  }
  async getGirls() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>杨幂，正在向你走来</h1>');
      }, 5000);
    });
  }
  async getGirl() {
    const { ctx } = this;
    ctx.body = ctx.query
  }
  async getGirl2() {
    const { ctx } = this;
    ctx.body = ctx.params.name
  }
  async getGirl3() {
    const { ctx } = this;
    let name = ctx.params.name
    let age = ctx.params.age
    ctx.body = '大哥你好，我是' + name + ',今年' + age + '岁.欢迎光临红浪漫!'
  }
  async add() {
    const ctx = this.ctx
    ctx.body = {
      status: 200,
      data: ctx.request.body
    }
  }
  async getGirl() {
    const { ctx } = this;
    const res = await ctx.service.qingshansima.getGirl('1818');
    ctx.body = res
  }
  async add() {
    const ctx = this.ctx
    // ctx.cookies.set("user","qingshansima.com",{
    //   maxAge:1000*2,
    //   httpOnly:false
    // })
    // 设置中文 cookie
    ctx.cookies.set("user", "青衫司马", {
      encrypt: true
    })
    ctx.session.username = '青衫司马'

    ctx.body = {
      status: 200,
      data: 'Cookie添加成功'
    }
  }
  async del() {
    const ctx = this.ctx
    ctx.cookies.set("user", null)
    ctx.session.username = null
    ctx.body = {
      status: 200,
      data: 'Cookie删除成功'
    }
  }
  async editor() {
    const ctx = this.ctx
    ctx.cookies.set("user", 'bilibili')
    ctx.body = {
      status: 200,
      data: 'Cookie修改成功'
    }
  }
  async show() {
    const ctx = this.ctx
    // const user = ctx.cookies.get("user")
    const user = ctx.cookies.get("user", {
      encrypt: true
    })
    console.log(user)
    ctx.body = {
      status: 200,
      data: 'Cookie显示成功'
    }
  }
  async newContext() {
    const { ctx } = this;
    const params = ctx.params();
    // console.log(params)
    ctx.body = 'newContext';
  }
  async newRequest() {
    const { ctx } = this;
    const token = ctx.request.token
    ctx.body = {
      status: 200,
      body: token
    }
  }
  async newResponse() {
    const { ctx } = this;
    ctx.response.token = 'qingshansima.com'
    ctx.body = 'newRespose'
  }
  async newResponse() {
    const { ctx } = this;
    const testBase64 = ctx.helper.base64Encode('qingshansima.com')
    ctx.body = testBase64
  }
}

module.exports = QingshansimaController;
