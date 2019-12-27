const CustomError = require('../../utils/error-class.js')
// 保存token
const tokenDb = require('../../models/login/replace-token')
const saveToken = ({ user, Token }) => {
  return new Promise((resolve, reject) => {
    tokenDb.find({ openid: user.openid }).exec((err, res) => {
      const query = { openid: user.openid }
      if (err) reject()
      if (res.length > 0) {
        // 如果用户存在则更新token
        new tokenDb().findOneAndUpdate(query, { token: Token, time: user.time })
      } else {
        // 如果不存在用户则插入用户信息
        new tokenDb({
          user,
          token: Token
        }).save()
      }
      resolve()
    })
  })
}

module.exports = saveToken