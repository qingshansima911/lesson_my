const Subscription = require('egg').Subscription

class GetTime extends Subscription {
  static get schedule() {
    return {
      // interval: '3s',
      // second minute hour day month week   
      cron: '*/3 * * * * *',
      // 运行时执行
      type: 'worker'
    };
  }

  async subscribe() {
    // console.log(Date.now())
  }

};

module.exports = GetTime;