// pages/index/components/head.js
Component({

  /**
   * 页面的初始数据
   */
  data: {
    searchVal: '',
    list:'',
  },
  methods: {
    search() {
      wx.redirectTo({
        url: `/pages/petSearch/index`
      })
    }
  }
})