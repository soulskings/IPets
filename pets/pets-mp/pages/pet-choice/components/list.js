// pages/pet-choice/components/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    cid: {
      type: String,
      value: '0'
    },
    loadmore: {
      type: Boolean,
      value: false
    },
    lastpage: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    top: 0,
    title: '宠物狗'
  },

  observers: {
    cid: function (value) {
      this.setData({
        top: 0
      })
      switch (value) {
        case '0':
          this.setData({
            title: '宠物狗'
          })
          break
        case '1':
          this.setData({
            title: '宠物猫'
          })
          break
        case '2':
          this.setData({
            title: '宠物鼠'
          })
          break
        case '3':
          this.setData({
            title: '宠物兔'
          })
          break
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadmore () {
      this.triggerEvent('loadEvent')
    },
    // 前往宠物详情
    goDetail (e) {
      const pid = e.currentTarget.dataset.pid
      wx.navigateTo({
        url: `/pages/pet-detail/index?pid=${pid}`
      })
    }
  }
})
