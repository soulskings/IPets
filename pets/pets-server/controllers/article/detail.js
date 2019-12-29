// 文章详情
const { template, resCode, message } = require('@api/code')
const CustomError = require('@utils/error-class.js')
const findArticle = require('@server/dbheleper/article/detail')

const detailController = async (ctx, next) => {
  const { articleId, articleType } = ctx.request.body
  if (!articleId || !articleType) throw new CustomError(template.paramsError)
  const article = await findArticle({
    articleId: articleId.toString(), 
    articleType: articleType.toString()
  })
  ctx.body = article
}

module.exports = detailController