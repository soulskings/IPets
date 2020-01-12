// 检查是否收藏过宠物
const CustomError = require('@utils/error-class.js')
const { template, resCode, message } = require('@api/code')
const petCheck = require('../../dbheleper/user/pet-check')

const petCheckController = async (ctx, next) => {
  const openid = ctx.header.openid
  const pid = ctx.request.body.pid

  if (!openid || !pid) {
    throw new CustomError(template.paramsError)
  }

  const status = await petCheck({ openid, pid })
  // status: 0未收藏 1已收藏
  ctx.body = {
    code: resCode.SUCCESS,
    data: status,
    message: resCode.SUCCESS
  }
}

module.exports = petCheckController