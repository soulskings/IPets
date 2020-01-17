// 宠物收藏列表
const CustomError = require('@utils/error-class.js')
const { template, resCode, message } = require('@api/code')
const findList = require('../../dbheleper/user/focus-pets')

const focusPetsController = async (ctx, next) => {
  const openid = ctx.header.openid
  const pageNum = ctx.request.body.pageNum
  const pageSize = ctx.request.body.pageSize || 10
  console.log(111, openid, ctx.request.body)

  if (!pageNum || !openid) throw new CustomError(template.paramsError)

  const { ListArr, lastPage } = await findList({ openid, pageNum, pageSize})

  ctx.body = {
    code: resCode.SUCCESS,
    data: {
      ListArr,
      lastPage
    },
    message: message.SUCCESS
  }
}

module.exports = focusPetsController