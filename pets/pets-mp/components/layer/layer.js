// components/layer/layer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    content: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    animationData: {}
  },

  attached () {
    const animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease'
    })
    this.animation = animation
    animation.opacity(1).step()
    animation.scale(1, 1).step()
    this.setData({
      animationData:animation.export()
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeMethod () {
      this.triggerEvent('closeEvent')
    }
  }
})
