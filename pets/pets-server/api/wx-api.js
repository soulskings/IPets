const wxUrl = 'https://api.weixin.qq.com'
const appid = 'wx6b04437c087fc326'
const secret = '40171a97d1a9f7a24b3a465fde2ac812'
const wxApi = {
  code2Session: `${wxUrl}/sns/jscode2session` // 登录凭证校验
}

module.exports = {
  wxApi,
  appid,
  secret
}