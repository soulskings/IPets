const cateController = require('../controllers/pets/cate')
const hotController = require('../controllers/pets/hot')
const detailController = require('../controllers/pets/detail')

module.exports = {
    'POST /node/cate': cateController, // 宠物种类
    'POST /node/hot': hotController, // 热门宠物
    'POST /node/detail': detailController // 宠物详情
}
