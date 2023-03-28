const userModel = require('../lib/mysql.js')
exports.getSignup = async ctx => {
    // 显示注册页面 view
    // ctx.response.body = '注册'
    let data = {
        title: '注册'
    }
    await ctx.render('signup', data) // 渲染模板
}
exports.postSignup = async ctx => {
    // model
    // console.log(ctx.request.body);
    const { name, password, repeatpass, avatar } = ctx.request.body
    if (!name) {
        ctx.body = {
            code: 500,
            message: '用户名没填'
        }
        return
    }
    if (!password) {
        ctx.body = {
            code: 500,
            message: '密码没填'
        }
        return
    }
    if (password != repeatpass) {
        ctx.body = {
            code: 500,
            message: '两次密码不一致'
        }
        return
    }
    if (!avatar) {
        ctx.body = {
            code: 500,
            message: '请上传头像'
        }
        return
    }
    try {
        const data = await userModel.findDataCountByName(name)
        console.log(data);
    } catch(err) {
        ctx.body = {
            code: 500,
            msg: err
        }
    }
    // ctx.body = 'post'

}