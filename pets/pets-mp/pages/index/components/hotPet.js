// pages/index/components/hotPet.js
Component({

  /**
   * 页面的初始数据
   */
  data: {
    hotData: [
      [{
          id: 1,
          name: 'ssfsf电饭锅电饭锅发的狗'
        },
        {
          id: 2,
          name: 'ssfsf狗'
        },
        {
          id: 3,
          name: 'ssfsf狗'
        },
        {
          id: 4,
          name: 'ssfsf狗'
        },
        {
          id: 5,
          name: 'ssfsf狗'
        }
      ],
      [{
        id: 2,
        name: 'ssfsf猫'
      }]
    ]
  },
  methods: {
    goDetail(item) {
      wx.navigateTo({
        url: `/pages/petStrategyDetail/index?id=${item.id}`
      })
    }
  }
})