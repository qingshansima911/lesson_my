module.exports = options => {
  return async (ctx, next) => {
    if (ctx.session.counter) {
      ctx.session.counter++
    } else {
      ctx.session.counter = 1
    }
    await next();
  }
};