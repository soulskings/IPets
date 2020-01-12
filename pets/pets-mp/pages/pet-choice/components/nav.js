// pages/pet-choice/components/nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    actIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tab: [
      {
        name: '宠物狗',
        cid: '0'
      },
      {
        name: '宠物猫',
        cid: '1'
      },
      {
        name: '宠物鼠',
        cid: '2'
      },
      {
        name: '宠物兔',
        cid: '3'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 切换tab
     */
    swich (e) {
      this.triggerEvent('switchMethod', {
        actIndex: e.currentTarget.dataset.index,
        cid: e.currentTarget.dataset.cid,
      })
    }
  }
})
