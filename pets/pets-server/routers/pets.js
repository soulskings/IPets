const cateController = require('../controllers/pets/cate')
const petListController = require('../controllers/pets/list')

module.exports = {
    'POST /pets/list': petListController, // 宠物列表
    'POST /node/cate': cateController // 宠物种类
}
