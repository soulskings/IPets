// pages/search-total/search-total.js
import { getPetsSearchPetList, getPetsSearchArticle } from '../../http/index'
let timer
Page({

  /**
   * 页面的初始数据
   */
  data: {
    petList: [], // 宠物列表
    articleList: [], // 文章列表
    noMore: false,
    loadmore: false,
    pageNum: 1,
    tag: ''
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

  fetchPet (value) {
    getPetsSearchPetList({
      tag: value,
      pageNum: 1,
      pageSize: 8
    }, false).then((res) => {
      this.setData({
        petList: res.List
      })
    })
  },

  fetchArticle (value) {
    this.setData({
      loadmore: true
    })
    getPetsSearchArticle({
      tag: value,
      pageNum: 1,
      pageSize: 8
    }, false).then((res) => {
      this.setData({
        articleList: res.list,
        loadmore: false,
        noMore: res.lastPage,
        pageNum: 2
      })
    })
  },

  /**
   * 输入搜索
   */
  inputMethod (e) {
    let value = e.detail.value
    this.debounce(value)
  },

  debounce (value) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      this.setData({
        tag: value
      })
      this.fetchPet(value)
      this.fetchArticle(value)
    }, 300)
  },

  /**
   * 加载更多
   */
  loadmoreMethod () {
    this.setData({
      loadmore: true
    })
    getPetsSearchArticle({
      tag: this.data.tag,
      pageNum: this.data.pageNum,
      pageSize: 8
    }, false).then((res) => {
      this.setData({
        articleList: this.data.articleList.concat(res.list),
        loadmore: false,
        noMore: res.lastPage,
        pageNum: this.data.pageNum + 1
      })
    })
  }
})