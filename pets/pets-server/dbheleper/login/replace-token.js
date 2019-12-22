// 保存token
const tokenDb = require('../../models/login/replace-token')
const saveToken = ({ user, Token }) => {
  tokenDb.find({ openid: user.openid }).exec((err, res) => {
    if (res.length > 0) {

    } else {
      // 插入用户信息
      new tokenDb().insertOne({
        user,
        token: Token
      })
    }
  })
}

module.exports = saveToken