const listModel = {
  title: String, // 文章title
  intro: String, // 文章描述
  article_id: String, // 文章id
  article_img: String, // 文章图片
  article_type: String, // 文章type
  nav: String, // 文章中文type
  like: String, // 点赞数
}
const List = PetsDb.model('articlelists', new Schema(listModel))
module.exports = List