const focusListDb = require('../../models/user/focus-pets')

const findList = ({ openid, pageNum, pageSize}) => {
  return new Promise((resolve, reject) => {
    let lastPage = false
    pageNum = parseInt(pageNum)
    pageSize = parseInt(pageSize)
    let ListArr = []
    focusListDb.find({ openid: openid }, {_id: 0})
      .lean()
      .exec((err, res) => {
        if (err) {
          return reject()
        }

        // 如果用户未收藏则返回空数组
        if (res.length === 0) {
          lastPage = true
          resolve({ 
            ListArr: [], 
            lastPage 
          })
        }

        res.forEach((item) => {
          // 判断是否为最后一页
          if (pageNum * pageSize >= item.List.length) {
            lastPage = true
          }

          // 分页逻辑
          item.List.forEach((listItem, index) => {
            if (
              index < pageNum * pageSize
              && index >= (pageNum - 1) * pageSize
              ) {
                ListArr.push(listItem)
              }
          })
        })
        
        resolve({ ListArr, lastPage })
        
    })
  })
}

module.exports = findList