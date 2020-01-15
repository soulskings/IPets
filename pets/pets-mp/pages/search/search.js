// pages/search/search.js
import { getPetsSearchPetList } from '../../http/index'
let timer
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List: [],
    loadmore: false,
    pageNum: 1,
    top: 0,
    input: '',
    lastPage: false,
    noMore: false
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
    this.setData({
      input: value
    })
    getPetsSearchPetList({
      tag: value,
      pageNum: 1,
      pageSize: 10
    }).then((res) => {
      this.setData({
        List: res.List,
        pageNum: 2,
        loadmore: false,
        top: 0,
        lastPage: res.lastPage,
        noMore: res.lastPage
      })
    })
  },

  loadmoreMethod () {
    if (this.data.lastPage) {
      this.setData({
        noMore: true
      })
      return
    }
    this.setData({
      loadmore: true
    })
    getPetsSearchPetList({
      tag: this.data.input,
      pageNum: this.data.pageNum,
      pageSize: 10
    }).then((res) => {
      const newList = this.data.List.concat(res.List)
      this.setData({
        loadmore: false,
        List: newList,
        pageNum: this.data.pageNum + 1,
        lastPage: res.lastPage
      })
    })
  },

  goDetail (e) {
    const pid = e.currentTarget.dataset.pid
    wx.navigateTo({
      url: `/pages/pet-detail/index?pid=${pid}`
    })
  },

  backMethod () {
    wx.navigateBack()
  }
})