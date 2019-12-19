const CircularJSON = require('circular-json')
const replaceTokenController = async (ctx, next) => {
  let body
  if (+ctx.request.body.code !== 1) {
    body = await CircularJSON.stringify({
        code: '999999',
        data: {
          token: null,
        },
        message: '网络异常'
    })
  } else {
    body = await CircularJSON.stringify({
        code: '000001',
        data: {
          token: '111111111',
        },
        message: '成功'
    }) 
  }
  ctx.body = body
}

module.exports = {
  replaceTokenController: replaceTokenController
}