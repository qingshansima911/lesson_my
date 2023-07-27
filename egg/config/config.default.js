/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1690287795409_5075';

  // add your middleware config here 全局挂载
  // config.middleware = ['counter'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // CSRF(Cross-Site Request Forgery)跨站请求伪造攻击
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.view = {
    mapping: {
      ".html": "ejs"
    }
  };
  config.ejs = {
    // 修改默认分隔符 把 % 换成 $
    // delimiter: "$"
  }
  // 修改静态资源前缀
  config.static = {
    // prefix:"/assets/"
  }
  // Session的相关配置
  config.session = {
    key: "qingshan_SESS",   // 设置Key的默认值
    httpOnly: true,      // 设置服务端操作
    maxAge: 1000 * 60,   // 设置最大有效时间
    renew: true,        // 页面有访问动作自动刷新session 
  }

  // exports.view = {
  //   defaultViewEngine: 'nunjucks',
  //   mapping: {
  //     '.html': 'nunjucks' //左边写成.html后缀，会自动渲染.html文件
  //   },
  // };

  config.mysql = {
    app: true,     //是否挂载到app下面
    agent: false,  //是否挂载到代理下面
    client: {
      host: '127.0.0.1',      // 数据库地址
      prot: '3306',           // 端口
      user: 'root',           // 用户名
      password: 'mysql',    // 密码
      database: 'test-egg'    // 连接的数据库名称
    }
  }
  return {
    ...config,
    ...userConfig,
  };
};
