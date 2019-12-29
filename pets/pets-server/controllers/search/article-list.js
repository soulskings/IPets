// 文章搜索列表
const { resCode, message } = require('@api/code')
const search = require('../../dbheleper/search/article-list')

const articleListController = async (ctx, next) => {
  // 文章tag, pageNum, pageSize
  const tag = ctx.request.body.tag
  const pageNum = ctx.request.body.pageNum
  const pageSize = ctx.request.body.pageSize
  const { list, lastPage } = await search({ tag, pageNum, pageSize })
  ctx.body = {
    code: resCode.SUCCESS,
    data: {
      list,
      lastPage
    },
    message: message.SUCCESS
  }
}
module.exports = articleListController