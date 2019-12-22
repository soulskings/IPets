const CustomError = require('../../utils/error-class.js')
const { template } = require('../../api/code')
const replaceTokenController = async (ctx, next) => {
  let body
  if (!ctx.request.body.code) {
    throw new CustomError(template.paramsError)
  } else {
    body = await {
        code: '000000',
        data: {
          token: '111111111',
        },
        message: '成功'
    }
  }
  ctx.body = body
}

module.exports = {
  replaceTokenController: replaceTokenController
}