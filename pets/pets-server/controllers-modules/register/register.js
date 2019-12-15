const CircularJSON = require('circular-json');
const registerController = async (ctx, next) => {
  console.log(ctx)
  let body
  if (ctx.header.mobile) {
    body = await CircularJSON.stringify({
        code: '000000',
        token: '111111111',
        message: '成功'
    })
  } else {
    body = await CircularJSON.stringify({
      code: '000031',
      message: '未登录'
    })
  }
  ctx.response.body = body
}

module.exports = {
  registerController: registerController
}