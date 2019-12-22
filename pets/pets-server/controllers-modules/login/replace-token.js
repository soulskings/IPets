const CustomError = require('../../utils/error-class.js')
const { template, resCode, message } = require('../../api/code')
const { fetchGet } = require('../../utils/request')
const { wxApi, appid, secret } = require('../../api/wx-api')

const replaceTokenController = async (ctx, next) => {
  let body
  const code = ctx.request.body.code
  if (!code) {
    throw new CustomError(template.paramsError)
  } else {
    // 请求微信登录凭证校验
    const [ res ] = await fetchGet(wxApi.code2Session, {
      appid,
      secret,
      js_code: code,
      grant_type: 'authorization_code'
    })

    // 校验失败
    if (res.errcode !== 0) {
      throw new CustomError({
        code: res.errcode,
        data: res,
        message: res.errmsg
      })
    }
    
    // 校验成功并关联库中用户数据
    body = {
        code: resCode.SUCCESS,
        data: {
          token: '111111111',
        },
        message: message.SUCCESS
    }
  }
  ctx.body = body
}

module.exports = {
  replaceTokenController: replaceTokenController
}