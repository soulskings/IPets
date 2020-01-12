// pages/pet-choice/index.js
import { getPetsList } from '../../http/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    actIndex: 0,
    cid: '0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchList()
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

  /**
   * tab切换
   */
  switchMethod (e) {
    this.setData({
      cid: e.detail.cid,
      actIndex: e.detail.actIndex
    })
  },

  /**
   * 请求宠物列表
   */
  fetchList () {
    getPetsList({
      cid: this.data.cid,
      count: 20,
      page: 0
    }).then(res => {
      console.log(res)
    })
  }
})