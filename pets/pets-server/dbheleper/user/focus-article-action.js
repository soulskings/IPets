const focusArticleDb = require('../../models/user/focus-article')

const upDataMethods = (res, focusData, resolve, status, articleList) => {
  let list = []
  const query = { openid: focusData.openid }

  res.forEach((item) => {
    item.List.forEach((itemList) => {
      list.push(itemList)

      if (itemList.article_id === focusData.article_id) {

        // 重复收藏
        status = 1
      } else {

        // 未收藏
        list.push(articleList)
        focusArticleDb.update(query, {
          openid: focusData.openid,
          List: list
        }, () => {})
      }
    })
  })
  resolve(status)
}

const focusArticle = (focusData) => {
  return new Promise((resolve, reject) => {
    let status = 0 // 0: 未收藏 1: 已经收藏

    const articleList = {
      title: focusData.title,
      intro: focusData.intro,
      article_img: focusData.article_img,
      article_type: focusData.article_type,
      article_id: focusData.article_id
    }

    focusArticleDb.find({ openid: focusData.openid })
    .lean()
    .exec((err, res) => {

      if (err) {
        return reject()
      }

      if (res.length === 0) {
        // 用户未收藏过
        new focusArticleDb({
          openid: focusData.openid,
          List: [
            articleList
          ]
        }).save()

        resolve(status)

      } else {
        // 用户已进行过收藏
        upDataMethods(res, focusData, resolve, status, articleList)
      }
    })
  })
}

module.exports = focusArticle