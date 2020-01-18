const tokenModel = {
  openid: {
    type: String,
    index: true
  }, // 用户id(开启索引提升查询效率)
  session_key: String, // session_key
  time: Date, // 时间戳
  token: String, // 用户token
  mobile: String // 手机号
}
const tokenDb = UsrDb.model('wxtokens', new Schema(tokenModel))
module.exports = tokenDb