// 收藏
const CustomError = require('@utils/error-class.js')
const { template, resCode, message } = require('@api/code')
const focusPet = require('../../dbheleper/user/focus-pet-action')
const focusArticle = require('../../dbheleper/user/focus-article-action')

const focusController = async (ctx, next) => {
  const openid = ctx.header.openid
  const body = ctx.request.body
  const { type, cid, pid, tag, name, img_url } = body
  const { title, intro, article_img, article_type, article_id } = body
  let focusData = {}
  if (!openid || !type) {
    throw new CustomError(template.paramsError)
  }
  // type: 1收藏宠物 2收藏文章
  if (type === '1' && cid && pid && tag && name) {
    // 收藏宠物
    focusData = {
      openid,
      cid,
      pid,
      name,
      img_url,
      tag
    }
    const status = await focusPet(focusData)
    
    ctx.body = {
      code: resCode.SUCCESS,
      data: {
        status,
      },
      message: message.SUCCESS
    }
    
  } else if (type === '2' && title && intro && article_type && article_id) {
    // 收藏文章
    focusData = {
      openid,
      title,
      intro,
      article_img,
      article_type,
      article_id
    }
    const status = await focusArticle(focusData)

    ctx.body = {
      code: resCode.SUCCESS,
      data: {
        status,
      },
      message: message.SUCCESS
    }
    
  } else {
    throw new CustomError(template.paramsError)
  }
}

module.exports = focusController