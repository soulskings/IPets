const List = require('../../models/search/article-list')

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
      if (item) {
        if (index < tagArr.length - 1) {
          tagReg = tagReg + item
        } else {
          tagReg = tagReg + item + '+'
        }
      }
    })

    List.count({ title: eval("/" + tagReg + "/ig") }, (err, count) => {
      if (err) return reject()
      totalCount = count

      if (pageSize * pageNum >= totalCount) {
        lastPage = true
      }
  
      List.find({ title: eval("/" + tagReg + "/ig") }, {_id: 0, article_url: 0})
          .skip((pageNum - 1) * pageSize)
          .limit(pageSize)
          .sort({pid: 1})
          .lean()
          .exec((err, list) => {
            if (err) return reject()
            resolve({ list, lastPage })
          })
    })
  })
}

module.exports = search