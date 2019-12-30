const tokenDb = require('../../models/login/replace-token')

const quit = (token) => {
  return new Promise((resolve, reject) => {
    tokenDb.remove({
      token: token
    }, (err, res) => {
      if (err) return reject()
      resolve(res)
    })
  })
}

module.exports = quit