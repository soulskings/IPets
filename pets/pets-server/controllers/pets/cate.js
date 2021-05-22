// 宠物类别
const { resCode, message } = require('@api/code')
const findCate = require('@server/dbheleper/pets/cate')

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