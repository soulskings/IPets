// 查找种类
const cateDb = require('../../models/pets/cate')
const findCate = () => {
  return new Promise((resolve, reject) => {
    cateDb.find({_id:0 }).lean().exec(function (err, res) {
      if (err) reject()
      resolve(res)
    })
  })
}

module.exports = findCate