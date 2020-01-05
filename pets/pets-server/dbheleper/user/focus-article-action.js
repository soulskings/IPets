const focusArticleDb = require('../../models/user/focus-article')

const upDataMethods = (res, focusData, resolve, status, articleList) => {
  let list = [], userdata = res[0]
  const query = { openid: focusData.openid }
  
  let has = userdata.List.find(item => item.article_id === focusData.article_id)
  if(has){
    status = 1
  }else{
    list = [...userdata.List, articleList]
    focusArticleDb.update(query, {
      openid: focusData.openid,
      List: list
    }, () => {})
  }
  
  resolve(status)
}

const removeMethods = (res, focusData, resolve, status) => {
  let userdata = res[0]
  const query = { openid: focusData.openid }

  focusArticleDb.update(query, {
    openid: focusData.openid,
    List: userdata.List.filter(item => item.article_id !== focusData.article_id)
  }, () => {})
  status = 0
  
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

const cancleFocusArticle = (focusData) => {
  return new Promise((resolve, reject) => {
    let status = 0 // 0: 未收藏 1: 已经收藏

    focusArticleDb.find({ openid: focusData.openid })
    .lean()
    .exec((err, res) => {
      if (err) {
        return reject()
      }

      if (res.length === 0) {
        // 用户未收藏过
        resolve(status)
      } else {
        // 用户已进行过收藏
        removeMethods(res, focusData, resolve, status)
      }
    })
  })
}

module.exports = {
  focusArticle,
  cancleFocusArticle
}