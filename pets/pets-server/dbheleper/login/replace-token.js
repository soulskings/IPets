// 保存token
const tokenDb = require('../../models/login/replace-token')
const saveToken = ({ user, Token, mobile }) => {
  return new Promise((resolve, reject) => {
    const query = { openid: user.openid }
    tokenDb.find(query).exec((err, res) => {
      if (err) return reject()
      if (res.length > 0) {
        // 如果用户存在则更新token
        tokenDb.update(query, { session_key: user.session_key, token: Token, time: user.time, mobile }, () => {})
      } else {
        // 如果不存在用户则插入用户信息
        new tokenDb({
          openid: user.openid,
          session_key: user.session_key,
          time: user.time,
          token: Token,
          mobile,
        }).save()
      }
      resolve()
    })
  })
}

module.exports = saveToken