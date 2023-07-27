"use strict";

const Service = require("egg").Service;

class testdbService extends Service {
  // 添加数据库
  async addGirl(params) {
    try {
      const { app } = this;
      const res = await app.mysql.insert('girls', params);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  // 删除数据库
  async delGirl(id) {
    try {
      const { app } = this;
      const res = await app.mysql.delete('girls', id)
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }

  }
  // 修改数据库
  async updateGirl(params) {
    try {
      const { app } = this;
      const res = await app.mysql.update('girls', params);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  // 查询数据库
  async getGirls(id) {
    try {
      const app = this.app;
      const res = await app.mysql.select('girls')
      return res
    } catch (error) {
      console.log(error)
      return null
    }
  }
}

module.exports = testdbService;