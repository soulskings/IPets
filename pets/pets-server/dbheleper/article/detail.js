// 查找文章详情
const articleDb = require('@server/models/article/detail')
const findArticle = ({ articleId, articleType }) => {
  return new Promise((resolve, reject) => {
    articleDb[articleType].find({ article_id: articleId }).lean().exec((err, res) => {
      if (err) {
        return reject()
      }
      resolve(res)
    })
  })
}

module.exports = findArticle