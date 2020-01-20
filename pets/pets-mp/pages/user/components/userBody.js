// pages/user/components/userBody.js
import { replaceToken, petsQuit } from '../../../http/index.js'
import create from '../../../utils/create'
import store from '../../../store/index'

create.Component(store, {
  use: [
    'hasToken'
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
    // isLogin: false
  },
  computed: {
    token() {
      console.log(this.hasToken)
      return this.hasToken;
    }
  },
  lifetimes: {
    created() {
      
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 进入收藏页
     */
    goCollect() {
      wx.navigateTo({
        url: '/pages/my-collections/index'
      })
    },
    quit() {
      petsQuit()
        .then((res) => {
          wx.removeStorage('token')
          wx.removeStorage('openid')
          this.store.data.userInfo = {};
          this.store.data.hasUserInfo = false;
          this.store.data.hasToken = false;
        })
    },
    login() {
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          replaceToken({ code: (res && res.code) || '' })
            .then(data => {
              let obj = {
                token: (data && data.token) || '',
                openid: (data && data.openid) || ''
              }
              wx.setStorageSync('token', obj.token)
              wx.setStorageSync('openid', obj.openid)
              this.store.data.hasToken = true;
              wx.showToast({
                icon: 'success',
                title: '登录成功',
                duration: 1000
              })
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
    }
  }
})
