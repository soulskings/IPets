const List = require('../../models/search/pet-list')

const search = ({ tag, pageNum, pageSize }) => {
  return new Promise((resolve, reject) => {
    const tagArr = tag.split('')
    let tagReg = ''
    let totalCount = 0
    let lastPage = false
    pageNum = pageNum ? parseInt(pageNum) : 1
    pageSize = pageSize ? parseInt(pageSize) : 10

    // 定义正则
    tagArr.forEach((item, index) => {
      if (index < tagArr.length - 1) {
        tagReg = tagReg + item + '|'
      } else {
        tagReg = tagReg + item
      }
    })
    
    List.count({ tag: eval("/" + tagReg + "/ig") }, (err, count) => {
      totalCount = count
    })

    if (pageSize * pageNum >= totalCount) {
      lastPage = true
    }

    // 分页查询
    List.find({ tag: eval("/" + tagReg + "/ig") }, {_id: 0})
        .skip((pageNum - 1) * pageSize)
        .limit(pageSize)
        .sort({pid: 1})
        .lean()
        .exec((err, List) => {
          if (err) return reject()
          resolve({ List, lastPage })
        })
  })
}

module.exports = search