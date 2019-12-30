// 退出登录
const quit = require('../../dbheleper/login/quit')
const { template, resCode, message } = require('@api/code')
const CustomError = require('@utils/error-class.js')

const quitController = async (ctx, next) => {
  const token = ctx.header.token
  const res = await quit(token)
  if (res.deletedCount > 0) {
    ctx.body = {
      code: resCode.SUCCESS,
      data: '注销成功',
      message: resCode.SUCCESS
    }
  } else {
    throw new CustomError(template.netError)
  }
}
module.exports = quitController

