const tokenModel = {
  openid: String, // 用户id
  session_key: String, // session_key
  time: Date, // 时间戳
  token: String, // 用户token
}
const tokenDb = UsrDb.model('wxtokens', new Schema(tokenModel))
module.exports = tokenDb