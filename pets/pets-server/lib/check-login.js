// 检查登录
const tokenDb = require('../models/login/replace-token')

const checkLogin = (token) => {
  return new Promise((resolve, reject) => {
    tokenDb.find({ token: token }).lean().exec((err, res) => {
      if (err) {
        return reject()
      }
      resolve(res)
    })
  })
}

module.exports = checkLogin