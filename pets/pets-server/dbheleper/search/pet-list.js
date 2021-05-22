const ListDb = require('../../models/pets/list')

const search = ({ tag, pageNum, pageSize }) => {
  return new Promise((resolve, reject) => {
    const tagArr = tag.split('')
    let checkList = []
    let tagReg = ''
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

    ListDb.find({ tag: eval("/" + tagReg + "/ig") }, {_id: 0})
            .lean()
            .exec((err, List) => {
              if (err) return reject()
              // 将全量匹配的放入头部
              List.forEach((item) => {
                let i = 0
                // 统计输入文字中每个字在tag中出现的次数总和
                tagArr.forEach((inputItem) => {
                  let tag = item.tag.join('').split('')
                  tag.forEach((tagItem) => {
                    if (inputItem === tagItem) {
                      i = i + 1
                    }
                  })
                })

                if (item.tag.includes(tag)) {
                  checkList.unshift(item)
                } else {
                  item.i = i
                  checkList.push(item)
                }
              })

              let sortList = [] // 接下来继续排序宠物
              let priorityList = [] // 优选级最高宠物
              // 筛选出tag完全匹配的宠物
              checkList.forEach((item) => {
                if (item['i']) {
                  sortList.push(item)
                } else {
                  priorityList.push(item)
                }
              })

              // 按匹配次数排序
              let newSortList = sortList.sort((a, b) => {
                let prevI = a['i']
                let nextI = b['i']
                return nextI - prevI
              })

              const outList = priorityList.concat(newSortList)

              let petList = outList.slice((pageNum - 1) * pageSize, pageNum * pageSize)

              if (pageNum * pageSize >= sortList.length) {
                lastPage = true
              }

              resolve({ petList, lastPage })
            })
  })
}

module.exports = search