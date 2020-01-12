// pages/pet-detail/index.js
import { getPetsDetailt, getPetsPetcheck, getPetsFocus } from '../../http/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {}, // 宠物详情
    collectionStatus: false, // 收藏状态
    pid: '' // pid
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pid: options.pid
    })
    this.fetchPetDetail(options.pid)
    this.petCheck(options.pid)
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

  },

  // 请求宠物详情数据
  fetchPetDetail (pid) {
    getPetsDetailt({pid}).then((res) => {
      this.setData({
        detail: res
      })
      wx.setNavigationBarTitle({
        title: res.name
      })
    })
  },

  // 查询宠物收藏状态
  petCheck (pid) {
    getPetsPetcheck({pid}).then((res) => {
      if (res.status === 0) {
        this.setData({
          collectionStatus: false
        })
      } else if (res.status === 1) {
        this.setData({
          collectionStatus: true
        })
      }
    }).catch((err) => {
      this.setData({
        collectionStatus: false
      })
    })
  },

  // 微信分享
  shareMethod () {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  // 收藏
  collectionMethod () {
    let pid = this.data.pid
    if (!this.data.collectionStatus) {
      getPetsFocus({
        type: '1',
        pid
      }).then((res) => {
        // 收藏成功
        if (res.status === 0) {
          wx.showToast({
            title: '收藏成功',
            duration: 1000,
            mask: true
          })
        } else if (res.status === 1) {
          // 已收藏
          wx.showToast({
            title: '已收藏',
            duration: 1000,
            mask: true
          })
        }
        this.setData({
          collectionStatus: true
        })
      })
    }
  }
})