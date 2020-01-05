const focusArticleModel = {
  openid: String,
  List: [
    {
      nav: String,
      title: String,
      intro: String,
      article_img: String,
      like: String,
      article_type: String,
      article_id: String
    }
  ]
}
const focusArticleDb = UsrDb.model('focusarticles', new Schema(focusArticleModel))
module.exports = focusArticleDb