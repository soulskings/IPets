const focusListDb = require('../../models/user/focus-pets')

const upDataMethods = (res, focusData, resolve, status, petsList) => {
  let list = []
  const query = { openid: focusData.openid }

  res.forEach((item) => {
    item.List.forEach((itemList) => {
      list.push(itemList)

      if (itemList.pid === focusData.pid) {

        // 重复收藏
        status = 1
      } else {

        // 未收藏
        list.push(petsList)
        focusListDb.update(query, {
          openid: focusData.openid,
          List: list
        }, () => {})
      }
    })
  })
  resolve(status)
}

const focusPet = (focusData) => {
  return new Promise((resolve, reject) => {
    let status = 0 // 0: 未收藏 1: 已经收藏

    const petsList = {
      cid: focusData.cid,
      pid: focusData.pid,
      img_url: focusData.img_url,
      tag: JSON.parse(focusData.tag),
      name: focusData.name
    }

    focusListDb.find({ openid: focusData.openid })
    .lean()
    .exec((err, res) => {

      if (err) {
        return reject()
      }

      if (res.length === 0) {
        // 用户未收藏过
        new focusListDb({
          openid: focusData.openid,
          List: [
            petsList
          ]
        }).save()

        resolve(status)

      } else {
        // 用户已进行过收藏
        upDataMethods(res, focusData, resolve, status, petsList)
      }
    })
  })
}

module.exports = focusPet