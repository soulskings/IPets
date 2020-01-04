const focusPetsController = require('../controllers/user/focus-pets')
const focusArticleController = require('../controllers/user/focus-article')
const focusController = require('../controllers/user/focus')

module.exports = {
    'POST /pets/focuspets': focusPetsController, // 收藏列表
    'POST /pets/focusarticle': focusArticleController, // 收藏文章列表
    'POST /pets/focus': focusController // 收藏接口
}