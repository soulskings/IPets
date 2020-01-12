// 查找宠物详情
const detailDb = require('@server/models/pets/detail')
const findDetail = (pid) => {
  return new Promise((resolve, reject) => {
    detailDb.find({pid: pid}, {_id: 0}).lean().exec((err, res) => {
      if (err) {
        return reject()
      }
      if (res.length === 0) {
        return resolve()
      }
      resolve(res[0])
    })
  })
}

module.exports = findDetail