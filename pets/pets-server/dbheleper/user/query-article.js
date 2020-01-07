const List = require('../../models/search/article-list')

// 查询文章列表
const queryArticle = (pid) => {
  return new Promise((resolve, reject) => {
    List.find({ pid }, { _id: 0 })
    .lean().exec((err, res) => {
      
      if (err) {
        return reject()
      }

      if (res.length === 0) {
        resolve()
      } else {
        resolve(res[0])
      }
    })
  })
}

module.exports = queryArticle