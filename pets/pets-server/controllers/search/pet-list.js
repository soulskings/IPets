// 宠物搜索列表
const search = require('@server/dbheleper/search/pet-list')
const { resCode, message } = require('@api/code')

const petListController = async (ctx, next) => {
  // 宠物tag, pageNum, pageSize
  const tag = ctx.request.body.tag
  const pageNum = ctx.request.body.pageNum
  const pageSize = ctx.request.body.pageSize
  const { petList, lastPage} = await search({ tag, pageNum, pageSize })
  ctx.body = {
    code: resCode.SUCCESS,
    data: {
      List: petList,
      lastPage
    },
    message: message.SUCCESS
  }
}
module.exports = petListController