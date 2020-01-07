const ListDb = require('../../models/pets/list')

// 查询宠物列表
const queryPet = (pid) => {
  return new Promise((resolve, reject) => {
    ListDb.find({ pid }, { _id: 0 })
    .lean().exec((err, res) => {
      
      if (err) {
        return reject()
      }

      if (res.length === 0) {
        resolve()
      } else {
        resolve(res[0])
      }
    })
  })
}

module.exports = queryPet