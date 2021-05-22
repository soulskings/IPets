// 置换token
const CustomError = require('@utils/error-class.js')
const { template, resCode, message } = require('@api/code')
const { fetchGet } = require('@utils/request')
const { wxApi, appid, secret } = require('@api/wx-api')
const saveToken = require('@server/dbheleper/login/replace-token')
const jwt = require('jsonwebtoken')

const replaceTokenController = async (ctx, next) => {
  let body
  const code = ctx.request.body.code
  const mobile = ctx.request.body.mobile || '18132739007'

  if (!code || !mobile) {
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
    if (res.errcode && res.errcode !== 0) {
      throw new CustomError({
        code: res.errcode,
        data: res,
        message: res.errmsg
      })
    }

    // 校验成功并生成token
    const user = {
      openid: res.openid,
      session_key: res.session_key,
      time: new Date()
    }

    const preToken = jwt.sign(user, 'shhhhh')
    const Token = preToken.split('.')[1]
    
    // 保存用户token
    await saveToken({
      user,
      Token,
      mobile
    })

    body = {
      code: resCode.SUCCESS,
      data: {
        token: Token,
        openid: user.openid
      },
      message: message.SUCCESS
    }
  }
  ctx.body = body
}

module.exports = replaceTokenController