const searchController = require('../controllers/search/search')

module.exports = {
    'POST /pets/hotsearch': searchController.hotSearch, // 热搜
}
