// pages/pet-choice/index.js
import { getPetsList } from '../../http/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    actIndex: 0,
    cid: '0',
    petList: [],
    page: 0,
    loadmore: false,
    total: 0,
    lastPage: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      actIndex: + options.cid,
      cid: options.cid
    })
    this.fetchList(0)
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
    if (e.detail.actIndex !== this.data.actIndex) {
      this.setData({
        cid: e.detail.cid,
        actIndex: e.detail.actIndex
      })
      this.fetchList(0)
    }
  },

  /**
   * 请求宠物列表
   */
  fetchList (page) {
    this.setData({
      page: 0,
      lastPage: false
    })
    getPetsList({
      cid: this.data.cid,
      count: 20,
      page: page
    }, true).then(res => {
      if (res.data.length === res.total) {
        this.setData({
          lastPage: true
        })
      }
      this.setData({
        petList: res.data,
        total: res.total,
        page: this.data.page + 1
      })
    })
  },
  /**
   * 加载更多
   */
  loadMethod () {
    if (this.data.lastPage) {
      return
    }
    this.setData({
      loadmore: true
    })
    getPetsList({
      cid: this.data.cid,
      count: 20,
      page: this.data.page
    }, false).then(res => {
      const oldList = this.data.petList
      const newList = oldList.concat(res.data)
      this.setData({
        petList: newList,
        page: this.data.page + 1,
        loadmore: false
      })

      if (newList.length === this.data.total) {
        this.setData({
          lastPage: true
        })
      }
    })
  },

  /**
   * 跳转搜索页
   */
  showSearch () {
    wx.navigateTo({
      url: `/pages/search/search`
    })
  }
})