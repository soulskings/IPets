// 宠物类别
const { template, resCode, message } = require('@api/code')
const CustomError = require('@utils/error-class.js')
const findDetail = require('@server/dbheleper/pets/detail')

const detailController = async (ctx, next) => {
  // 宠物pid
  let pid
  if (ctx.request.body.pid) {
    pid = (ctx.request.body.pid).toString()
  }
  if (!pid) {
    throw new CustomError(template.paramsError)
  } else {
    const detail = await findDetail(pid)
    if (!detail) {
      throw new CustomError(template.noFindPet)
    }
    ctx.body = {
      code: resCode.SUCCESS,
      data: detail,
      message: message.SUCCESS
    }
  }
}

module.exports = detailController