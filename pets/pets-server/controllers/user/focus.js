// 收藏
const CustomError = require('@utils/error-class.js')
const { template, resCode, message } = require('@api/code')
const { focusPet, cancleFocusPet } = require('../../dbheleper/user/focus-pet-action')
const { focusArticle, cancleFocusArticle } = require('../../dbheleper/user/focus-article-action')
const queryPet = require('../../dbheleper/user/query-pet')
const queryArticle = require('../../dbheleper/user/query-article')

const focusController = async (ctx, next) => {
  const openid = ctx.header.openid
  const body = ctx.request.body
  const { type, pid } = body
  const { article_type, article_id } = body
  let focusData = {}
  if (!openid || !type) {
    throw new CustomError(template.paramsError)
  }
  // type: 1收藏宠物 2收藏文章
  if (type == 1 && pid) {
    // 查询宠物列表库中收藏宠物的信息
    const pet = await queryPet(pid)
    const { cid, name, img_url, tag } = pet
    if (pet) {
      // 收藏宠物
      focusData = {
        openid,
        cid,
        pid,
        name,
        img_url,
        tag
      }
    } else {
      throw new CustomError({
        code: resCode.ERROR,
        data: null,
        message: 'pid不存在, 无此宠物'
      })
    }
    const status = await focusPet(focusData)
    
    ctx.body = {
      code: resCode.SUCCESS,
      data: {
        status,
      },
      message: message.SUCCESS
    }
    
  } else if (type === '2' && article_id) {
    // 查询文章列表中此文章信息
    const article = await queryArticle()
    const { title, intro, article_img } = article
    if (article) {
      // 收藏文章
      focusData = {
        openid,
        title,
        intro,
        article_img,
        article_type,
        article_id
      }
    } else {
      throw new CustomError({
        code: resCode.ERROR,
        data: null,
        message: 'article_id不存在, 无此文章'
      })
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

const cancleFocusController = async (ctx, next) => {
  const openid = ctx.header.openid
  const body = ctx.request.body
  const { type, cid, pid, article_id } = body
  let focusData = {}
  if (!openid || !type) {
    throw new CustomError(template.paramsError)
  }
  // type: 1收藏宠物 2收藏文章
  if (type === '1' && pid) {
    // 收藏宠物
    focusData = {
      openid,
      cid,
      pid
    }
    const status = await cancleFocusPet(focusData)
    
    ctx.body = {
      code: resCode.SUCCESS,
      data: {
        status,
      },
      message: message.SUCCESS
    }
    
  } else if (type === '2' && article_id) {
    // 收藏文章
    focusData = {
      openid,
      article_id
    }
    const status = await cancleFocusArticle(focusData)

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

module.exports = {
  focusController,
  cancleFocusController
}