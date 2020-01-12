// pages/user/components/userHead.js
import { replaceToken } from '../../../http/index.js'
import create from '../../../utils/create'
import store from '../../../store/index'
create.Component(store, {
  use: [
    'userInfo',
    'hasUserInfo'
  ],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    token: '',
    isAuthorize: true,
    userInfo: {}
  },
  lifetimes: {
    created() {
      this.getSetting();
    }
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
      console.log('show',this)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    authorizeFn(res) {
      if (res && res.detail && res.detail.errMsg === 'getUserInfo:ok') {
        this.setData({
          isAuthorize: true,
          userInfo: res.detail.rawData || {}
        })
        // wx.setStorageSync('userInfo',JSON.stringify(res.detail.rawData))
        this.store.data.userInfo = res.detail.rawData;
      } 
    },
    // 判断用户是否授权
    getSetting() {
      wx.getSetting({ // 授权
        success: (res) => {
          if (!res.authSetting['scope.userInfo']) {
            this.setData({
              isAuthorize: false
            })
          } else {
            this.setData({
              isAuthorize: true
            })
            this.infoFn();
          }
        }
      })
    },
    login() {
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          replaceToken({code: (res && res.code) || ''})
          .then(data => {
            let obj = {
              token: (data && data.token) || '',
              openid: (data && data.openid) || ''
            }
            this.setData({
              token: obj.token
            })
            wx.setStorageSync('token',obj.token)
            wx.setStorageSync('openid',obj.openid)
          })
          .catch(rej => {
            wx.showToast({
              title: '标题',
              duration: rej.message
            })
          })
        },
        err: rej => {

        }
      })
    },
    // 获取用户信息
    infoFn() {
      wx.getUserInfo({
        success: res => {
          // wx.setStorageSync('userInfo',JSON.stringify(res.rawData))
          this.store.data.userInfo = JSON.parse(res.rawData);
          this.setData({
            userInfo: this.store.data.userInfo || {},
            token : wx.getStorageSync('token') || '',
          })
        },
        fail: rej => {
          console.log(rej)
        }
      })
    }
  }
})
