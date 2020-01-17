// pages/user/components/userBody.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goCollect() {
      console.log(1111)
      wx.navigateTo({
        url: '/pages/my-collections/index'
      })
    }
  }
})
