const cateController = require('../controllers/pets/cate')
const hotController = require('../controllers/pets/hot')
const detailController = require('../controllers/pets/detail')
const petListController = require('../controllers/pets/list')

module.exports = {
    'POST /pets/list': petListController, // 宠物列表
    'POST /pets/cate': cateController, // 宠物种类
    'POST /pets/hot': hotController, // 热门宠物
    'POST /pets/detail': detailController // 宠物详情
}
