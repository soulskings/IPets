const articleModel = {
  ipets_tag: Array, // tag标签
  title: String, // 标题
  create_time: String, // 创建时间
  article_body: String, // 文章内容
  article_type: String, // 文章type
  article_id: String, // 文章id
  pid: String, // 宠物id
  article_type_cn: String, // 文章分类
  cid: String // 宠物类别
}
let collection = [
  {'1': 'trainings'}, // 训练表
  {'2': 'feeds'}, // 喂养表
  {'3': 'chooses'}, // 选宠表
  {'4': 'fads'}, // 常见疾病
  {'5': 'news'}, // 新手必读知识
  {'7': 'questiondetails'} // 常见问题
]

let articleDb = {}

// 将model挂载上
const articleDbMethods = () => {
  collection.forEach((item) => {
      let articleDbItem = PetsDb.model(Object.values(item)[0], new Schema(articleModel))
      Reflect.defineProperty(articleDb, Object.keys(item)[0], {
        value: articleDbItem
      })
  })
}

articleDbMethods()

module.exports = articleDb