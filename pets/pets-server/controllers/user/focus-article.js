// 文章收藏列表
const CustomError = require('@utils/error-class.js')
const { template, resCode, message } = require('@api/code')
const findArticleList = require('../../dbheleper/user/focus-article')

const focusArticleController = async (ctx, next) => {
  const openid = ctx.header.openid
  const pageNum = ctx.request.body.pageNum
  const pageSize = ctx.request.body.pageSize || 10

  if (!pageNum || !openid) throw new CustomError(template.paramsError)

  const { ListArr, lastPage } = await findArticleList({ openid, pageNum, pageSize})

  ctx.body = {
    code: resCode.SUCCESS,
    data: {
      ListArr,
      lastPage
    },
    message: message.SUCCESS
  }
}

module.exports = focusArticleController