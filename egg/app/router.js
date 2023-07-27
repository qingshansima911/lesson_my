'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/qingshansima', controller.home.qingshansima);
  router.get('/my', controller.qingshansima.index);
  router.get('/getGirls', controller.qingshansima.getGirls);
  router.get('/getGirl', controller.qingshansima.getGirl);
  router.get('/getGirl2/:name', controller.qingshansima.getGirl2);
  router.get('/getGirl3/:name/:age', controller.qingshansima.getGirl3);
  router.post('/add', controller.qingshansima.add);
  router.get('/testGetGirl', controller.home.testGetGirl);
  router.post('/add', controller.qingshansima.add);
  router.post('/del', controller.qingshansima.del);
  router.post('/editor', controller.qingshansima.editor);
  router.post('/show', controller.qingshansima.show);
  const counter = app.middleware.counter()
  router.get('/my', counter, controller.qingshansima.index);
  // router.get('/newContext', controller.qingshansima.newContext);
  router.post('/newContext', controller.qingshansima.newContext);
  router.post("/newRequest", controller.qingshansima.newRequest);
  router.get('/newResponse', controller.qingshansima.newResponse);

  router.get("/addGirl", controller.girlsManage.addGirl);
  router.get("/delGirl", controller.girlsManage.delGirl);
  router.get("/updateGirl", controller.girlsManage.updateGirl);
  router.get("/getGirls2", controller.girlsManage.getGirls);
};
