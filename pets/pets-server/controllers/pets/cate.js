// 宠物类别
const { resCode, message } = require('../../api/code')
const findCate = require('../../dbheleper/pets/cate')
const CustomError = require('../../utils/error-class.js')
const cateController = async (ctx, next) => {
  // 查找宠物种类
  const cateList = await findCate()
  ctx.body = {
    code: resCode.SUCCESS,
    data: cateList,
    message: message.SUCCESS
  }
}

module.exports = cateController