// 查找种类
const cateDb = require('../../models/pets/cate')
const findCate = () => {
  return new Promise((resolve, reject) => {
    cateDb.find().lean().exec(function (err, res) {
      const list = []
      if (err) reject()
      res.forEach((item) => {
        list.push({
          cid: item.cid,
          name: item.name,
          img: item.img
        })
      })
      resolve(list)
    })
  })
}

module.exports = findCate