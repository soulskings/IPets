// 鉴权中间件
const router = require('../api/auth-router')
const { template } = require('../api/code')
const checkLogin = require('../lib/check-login')

const checkMiddleware = async (ctx, next) => {
  try {
    if (Object.values(router).includes((ctx.url).split('?')[0])) {
      let token = ctx.header.token
      if (!token) {
        // 没有token
        return ctx.body = template.noLogin
      } else {
        // 有token检查是否登录失效
        const user = await checkLogin(token)
        if (user.length === 0) return ctx.body = template.noLogin
      }
      await next()
    } else {
      await next()
    }
  } catch (err) {
    ctx.body = await template.netError
  }
}

module.exports = checkMiddleware