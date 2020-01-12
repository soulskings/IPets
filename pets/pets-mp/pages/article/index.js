// pages/pet-detail/index.js
import { getPetsArticleDetail } from '../../http/index'
import WxParse from '../../utils/wxParse/wxParse.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article_body: '',
    detail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { articleId, articleType } = options
    this.fetchArticleData({
      articleId,
      articleType
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

  },

  // 请求宠物详情数据
  fetchArticleData (data) {
    return getPetsArticleDetail(data).then((res) => {
      this.setData({
        detail: res[0],
        article_body: res[0].article_body
      })
      WxParse.wxParse('article_body', 'html', res[0].article_body, this, 5); 
    })
  }
})