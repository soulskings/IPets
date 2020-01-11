import { getPetsHotSearch } from '../../../http/index'
import { petsTypeConf } from '../../../utils/constantConfig'
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 页面的初始数据
   */
  data: {
    petsType: petsTypeConf,
    hotData: [
      // [{
      //   id: 1,
      //   name: 'ssfsf电饭锅电饭锅发的狗'
      // },
      // {
      //   id: 2,
      //   name: 'ssfsf狗'
      // },
      // {
      //   id: 3,
      //   name: 'ssfsf狗'
      // },
      // {
      //   id: 4,
      //   name: 'ssfsf狗'
      // },
      // ],
      // [{
      //   id: 2,
      //   name: 'ssfsf猫'
      // }]
    ]
  },
  lifetimes: {
    created() {
      this.getData();
    }
  },
  methods: {
    // 获取热门宠物
    getData() {
      getPetsHotSearch()
        .then((res) => {
          this.setData({
            hotData: res
          })
        })
    },
    // 进入宠物攻略详情
    goDetail(item) {
      let pid = item.currentTarget.dataset.pid || '';
      wx.navigateTo({
        url: `/pages/pet-detail/index?pid=${pid}`
      })
    }
  }
})