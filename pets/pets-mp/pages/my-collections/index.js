import { getPetsFocuspets, getPetsFocusarticle } from '../../http/index'

// pages/pet-choice/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activetype: 0,
    page: 0,
    listData: [],
    status: 'idle',
    more: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.refreshData()
  },

  refreshData() {
    this.setData({
      page: 0,
      listData: [],
      more: true
    }, this.loadData)
  },

  loadData() {
    let {activetype, page, status, more} = this.data
    console.log(status != 'idle' , !more)
    if(status == 'loading' || !more){
      return 
    }
    this.setData({
      status: 'loading'
    })
    
    let fetchList = activetype == 0 ? getPetsFocuspets : getPetsFocusarticle
    fetchList({pageSize: 10, pageNum: page + 1}).then(res => {
      let {ListArr = [], lastPage = true} = res
      // if(activetype == 0){
      //   for(let i = 0; i< 10; i++){
      //     ListArr.push({
      //       title
      //       :
      //       "小藏獒饲养方法 注意防寒避暑",
      //       original_url
      //       :
      //       "http://www.ichong123.com/changshi/379.html",
      //       article_type
      //       :
      //       "2",
      //       article_id
      //       :
      //       "04d93e2738d66046cb8",
      //       pid
      //       :
      //       "0000",
      //       article_type_cn
      //       :
      //       "喂养技巧",
      //       cid
      //       :
      //       0
      //     })
      //   }
      // }else{
      //   for(let i = 0; i< 10; i++){
      //     ListArr.push({
      //       cid
      //       :
      //       "1",
      //       pid
      //       :
      //       "1037",
      //       name
      //       :
      //       "英国短毛猫",
      //       intro
      //       :
      //       "英国短毛猫有悠久的历史，但直到20世纪初才引起人们的宠爱。该猫体形圆胖，四肢粗短发达，被毛短而密，头大脸圆，大而圆的眼睛根据被毛不同而呈现各...",
      //       characteristics
      //       :
      //       "　　英国短毛猫是一种身体紧凑、匀称并且强壮有力的猫，身体很厚实，胸部饱满宽阔，腿部粗壮，长度为短到中等，爪子浑圆，尾巴的根部粗壮, 尾尖钝圆...",
      //       personality
      //       :
      //       "　　英国短毛猫大胆好奇，但非常温柔，适应能力也很强，不会因为环境的改变而改变，也不会乱发脾气、更不会乱吵乱叫，它只会尽量爬到比较高的地方，低...",
      //       feed
      //       :
      //       "　　给英国短毛喂食要注意，英国短毛的鼻子属于短鼻，猫粮碗一定不能太深，罐头最好用碟子来喂，每次猫吃完后要马上清理干净。每日2-3餐，坚持量少...",
      //       environment
      //       :
      //       "　　英国短毛猫一直以来都以好奇心旺盛而著称，它会仔细地查看加重的每一个角落。虽然英国短毛猫大胆好奇，但非常温柔，适应能力也很强，不会因为环境...",
      //     })
      //   }
      // }
      this.setData({
        listData: ListArr,
        more: !lastPage,
        page: page + 1,
        status: 'idle'
      })
    }).catch(err => {
      this.setData({
        status: 'failed',
      })
    })
  },

  goPetDetail (e) {
    const {pid} = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/pet-detail/index?pid=${pid}`
    })
  },

  goArticleDetail (e) {
    const {articleid, articletype} = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/article/index?article_id=${articleid}&article_type=${articletype}`
    })
  },

  handleClickTab(e){
    if(e.target.id == 'tab-item0'){
      this.setData({
        activetype: 0,
        page: 0,
        more: true,
        listData: []
      }, this.loadData)
    }else{
      this.setData({
        activetype: 1,
        page: 0,
        more: true,
        listData: []
      }, this.loadData)
    }
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