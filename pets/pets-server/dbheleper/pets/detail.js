// 查找宠物详情
const detailDb = require('@server/models/pets/detail')
const findDetail = (pid) => {
  return new Promise((resolve, reject) => {
    detailDb.find({pid: pid}).lean().exec((err, res) => {
      if (err) {
        return reject()
      }
      if (res.length === 0) {
        return resolve()
      }
      const {
        characteristic_list, // 宠物属性
        imgArr, // 宠物图片
        cid, // cid
        pid, // pid
        name, // 宠物名
        intro, // 宠物简介
        characteristics, // 宠物形态特征
        personality, // 宠物性格特点
        feed, // 宠物喂食要点
        environment, // 宠物生活环境
        training_list, // 训练技巧文章列表
        feeding_list, // 喂养技巧文章列表
        choose_list, // 挑选技巧文章列表
        fad_list, // 常见疾病文章列表
        new_list, // 新手必读知识文章列表
      } = res[0]
      const detail = {
        characteristic_list,
        imgArr,
        cid,
        pid,
        name,
        intro,
        characteristics,
        personality,
        feed,
        environment,
        training_list,
        feeding_list,
        choose_list,
        fad_list,
        new_list,
      }
      resolve(detail)
    })
  })
}

module.exports = findDetail