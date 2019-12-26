const detailModel = {
  characteristic_list: {
    propertyList: Array,
    star: Array
  }, // 宠物属性
  imgArr: Array, // 宠物图片
  cid: String, // cid
  pid: String, // pid
  name: String, // 宠物名
  intro: String, // 宠物简介
  characteristics: String, // 宠物形态特征
  personality: String, // 宠物性格特点
  feed: String, // 宠物喂食要点
  environment: String, // 宠物生活环境
  training_list: Array, // 训练技巧文章列表
  feeding_list: Array, // 喂养技巧文章列表
  choose_list: Array, // 挑选技巧文章列表
  fad_list: Array, // 常见疾病文章列表
  new_list: Array, // 新手必读知识文章列表
}
const detailDb = PetsDb.model('details', new Schema(detailModel))
module.exports = detailDb