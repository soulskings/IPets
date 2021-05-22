// pages/pet-detail/components/strategy.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    border: {
      type: String,
      value: "true"
    },
    List: {
      type: Array,
      value: []
    }
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
    goArticleMethod (e) {
      let { articleid, articletype } = e.currentTarget.dataset
      wx.navigateTo({
        url: `/pages/article/index?articleId=${articleid}&articleType=${articletype}`
      })
    }
  }
})
