const focusPetsController = require('../controllers/user/focus-pets')
const focusArticleController = require('../controllers/user/focus-article')
const {focusController, cancleFocusController} = require('../controllers/user/focus')
const petCheckController = require('../controllers/user/pet-check')

module.exports = {
    'POST /pets/focuspets': focusPetsController, // 收藏列表
    'POST /pets/focusarticle': focusArticleController, // 收藏文章列表
    'POST /pets/focus': focusController, // 收藏接口
    'POST /pets/canclefocus': cancleFocusController, // 收藏接口
    'POST /pets/petcheck': petCheckController // 查询是否收藏过宠物
}
