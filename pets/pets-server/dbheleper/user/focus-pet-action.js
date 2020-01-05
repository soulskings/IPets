const focusListDb = require('../../models/user/focus-pets')

const upDataMethods = (res, focusData, resolve, status, petsList) => {
  let list = [], userdata = res[0]
  const query = { openid: focusData.openid }
  
  let has = userdata.List.find(item => item.pid === focusData.pid)
  if(has){
    status = 1
  }else{
    list = [...userdata.List, petsList]
    focusListDb.update(query, {
      openid: focusData.openid,
      List: list
    }, () => {})
  }
  
  resolve(status)
}

const removeMethods = (res, focusData, resolve, status) => {
  let userdata = res[0]
  const query = { openid: focusData.openid }
  
  focusListDb.update(query, {
    openid: focusData.openid,
    List: userdata.List.filter(item => item.pid !== focusData.pid)
  }, () => {})
  status = 0
  
  resolve(status)
}

const focusPet = (focusData) => {
  return new Promise((resolve, reject) => {
    let status = 0 // 0: 未收藏 1: 已经收藏

    const petsList = {
      cid: focusData.cid,
      pid: focusData.pid,
      img_url: focusData.img_url,
      tag: focusData.tag,
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

const cancleFocusPet = (focusData) => {
  return new Promise((resolve, reject) => {
    let status = 0 // 0: 未收藏 1: 已经收藏

    focusListDb.find({ openid: focusData.openid })
    .lean()
    .exec((err, res) => {
      if (err) {
        return reject()
      }

      if (res.length === 0) {
        // 用户未收藏过
      } else {
        // 用户已进行过收藏
        removeMethods(res, focusData, resolve, status)
      }
    })
  })
}

module.exports = {
  focusPet, 
  cancleFocusPet
}