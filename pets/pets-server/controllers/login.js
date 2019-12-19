const { replaceTokenController } = require('../controllers-modules/login/replace-token')
module.exports = {
    'POST /node/replace-token': replaceTokenController // 小程序code置换token
}
