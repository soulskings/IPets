// 处理异常中间件
const { template } = require('../api/code')
const errorController = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    console.log(err, '代码错误')
    if (!err) err = {
      errorObj: template.netError
    }
    let errorObj = err.errorObj
    console.log(`抛出了错误:${JSON.stringify(errorObj)}`)
    ctx.body = await errorObj
  }
}

module.exports = errorController