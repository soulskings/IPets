import { getPetsFocuspets } from '../../http/index'

// pages/pet-choice/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activetype: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // getPetsFocuspets().then(res => {
    //   console.log(res)
    // })
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

  handleClickTab(e){
    if(e.target.id == 'tab-item0'){
      this.setData({
        activetype: 0
      })
    }else{
      this.setData({
        activetype: 1
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})