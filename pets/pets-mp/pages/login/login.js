// pages/login/login.js
import { replaceToken } from '../../http/index.js'
import create from '../../utils/create'
import store from '../../store/index'
create.Page(store, {
  use: [
    'userInfo',
    'hasUserInfo',
    'hasToken'
  ],

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  getPhoneNumber() {
    
  },
  tokenFn(res) {
    replaceToken({ code: (res && res.code) || '' })
      .then(data => {
        let obj = {
          token: (data && data.token) || '',
          openid: (data && data.openid) || ''
        }
        wx.setStorageSync('token', obj.token)
        wx.setStorageSync('openid', obj.openid)
        wx.navigateBack();
      })
      .catch(rej => {
        wx.showToast({
          title: '标题',
          duration: rej.message
        })
      })
  },
  login() {
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        this.tokenFn(res);
      },
      err: rej => {

      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})