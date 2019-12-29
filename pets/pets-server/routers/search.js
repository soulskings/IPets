const searchController = require('../controllers/search/search')
const petListController = require('../controllers/search/pet-list')

module.exports = {
    'POST /pets/hotsearch': searchController.hotSearch, // 热搜
    'POST /pets/searchpetlist': petListController // 搜索宠物列表
}
