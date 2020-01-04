const replaceTokenController = require('../controllers/login/replace-token')
const quitController = require('../controllers/login/quit')

module.exports = {
    'POST /pets/replace-token': replaceTokenController, // 小程序code置换token
    'POST /pets/quit': quitController // 退出登录
}
