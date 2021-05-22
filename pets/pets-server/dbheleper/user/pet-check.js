// 检查是否收藏过宠物
const focusListDb = require('../../models/user/focus-pets')

const petCheck = ({ openid, pid}) => {
  return new Promise((resolve, reject) => {
    focusListDb.findOne({openid, List: {$elemMatch: {pid}}})
      .lean()
      .exec((err, res) => {
      if (err) {
        return reject()
      }
      if (res) {
        resolve({status: 1})
      } else {
        resolve({status: 0})
      }
    })
  })
}

module.exports = petCheck