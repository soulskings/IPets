// pages/pet-detail/components/attribute.js.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detail: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hide: true, // 是否隐藏简介
    showNumber: 4, // 展示宠物属性数量
    showAll: false, // 是否展示全部宠物概况
    showLayer: false, // 是否展示layer
    layerTitle: '', // 弹框tilte
    layerContent: '', // 弹框内容
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 是否展示简介
    show () {
      this.setData({
        hide: !this.data.hide
      })
    },
    // 是否展示全部宠物属性
    showAll () {
      this.setData({
        showAll: !this.data.showAll
      })
      if (this.data.showAll) {
        this.setData({
          showNumber: this.data.detail.characteristic_list.propertyList.length
        })
      } else {
        this.setData({
          showNumber: 4
        })
      }
    },
    // 查看浮层
    checkMethod (e) {
      this.setData({
        showLayer: true,
        layerTitle: e.target.dataset.title,
        layerContent: e.target.dataset.content
      })
    },
    // 关闭浮层
    closeMethod () {
      this.setData({
        showLayer: false,
        layerTitle: '',
        layerContent: ''
      })
    }
  }
})
