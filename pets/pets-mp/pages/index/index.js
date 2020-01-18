//index.js
import create from '../../utils/create'
import store from '../../store/index'
const util = require('../../utils/util.js')
//获取应用实例
const app = getApp()

create(store, {
  use: [
    'userInfo',
    'hasUserInfo'
    ],
  onLoad: function () {
    if (wx.getStorageSync('token')) {
      this.store.data.hasToken = true;
    }
    if (app.globalData.userInfo) {
      this.store.data.userInfo = app.globalData.userInfo
      this.store.data.hasUserInfo = true

    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.store.data.userInfo = res.userInfo
        this.store.data.hasUserInfo = true
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.store.data.userInfo = res.userInfo
          this.store.data.hasUserInfo = true
        }
      })
    }
  },
})
