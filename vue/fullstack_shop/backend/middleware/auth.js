const jwt = require('jsonwebtoken');

const authMiddleware = async (ctx, next) => {
  try {
    // Berar token
    const token = ctx.headers.authorization?.split(' ')[1];
    // console.log(token, '????')
    if (!token) {
      // ctx.status = 401;
      // ctx.body = { message: 'Authentication failed. Token missing.' };
      await next()
      return;
    }
    const decodedToken = jwt.verify(token, 'your-secret-key')
    // console.log(decodedToken)
    ctx.user = { id: decodedToken.id, username: decodedToken.username };
    // console.log(ctx.user);
    await next();
  } catch (error) {
    ctx.status = 401;
    ctx.body = { message: 'Authentication failed. Invalid token.' };
  }
};

// const checkAuth = async (ctx, next) => {
//   console.log(ctx.user);
//   if (ctx.user && ctx.user.id) {
//     next()
//   } else {
//     next()
//     // new Error('请登录')
//   }
// }

module.exports = authMiddleware
