const conf = require('./config/index')
const mongoose = require('mongoose')
// 创建模型
console.log(conf,33333333333333)
const goodsSchema = new mongoose.Schema(
    conf
  //   {
  //     detail_page_url: String,
  //     imgUrl: String,
  //     name: String,
  //     avatar: String,
  //     price_range: String
  // }
)
module.exports = mongoose.model('Goods', goodsSchema)
