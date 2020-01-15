// pages/search/search.js
import { getPetsSearchPetList } from '../../http/index'
let timer
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  inputMethod (e) {
    let value = e.detail.value
    this.debounce(value)
  },

  debounce (value) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      this.fetchList(value)
    }, 300)
  },

  fetchList (value) {
    getPetsSearchPetList({
      tag: value,
      pageNum: 1,
      pageSize: 10
    }).then((res) => {
      this.setData({
        List: res.List
      })
    })
  }
})