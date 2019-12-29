const searchController = require('../controllers/search/search')
const petListController = require('../controllers/search/pet-list')
const articleListController = require('../controllers/search/article-list')

module.exports = {
    'POST /pets/hotsearch': searchController.hotSearch, // 热搜
    'POST /pets/searchpetlist': petListController, // 搜索宠物列表
    'POST /pets/searcharticle': articleListController // 搜索文章列表
}
