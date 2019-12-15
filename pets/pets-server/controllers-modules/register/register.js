const CircularJSON = require('circular-json');
const registerController = async (ctx, next) => {
  const  body = await CircularJSON.stringify({
        code: '000000',
        token: '111111111',
        message: '成功'
    })
  ctx.response.body = body
}

module.exports = {
  registerController: registerController
}