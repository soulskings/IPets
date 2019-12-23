const { replaceTokenController } = require('../controllers/login/replace-token')
module.exports = {
    'POST /node/replace-token': replaceTokenController // 小程序code置换token
}
