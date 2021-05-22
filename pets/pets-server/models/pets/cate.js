const cateModel = {
  cid: String, // 宠物cid
  name: String, // 名称
  img: String // 图片
}
const cateDb = PetsDb.model('cates', new Schema(cateModel))
module.exports = cateDb