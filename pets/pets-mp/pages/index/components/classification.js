// pages/index/components/classification.js
import {
  getPetsCate
} from '../../../http/index.js'
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 页面的初始数据
   */
  data: {
    errorUrl: '/images/8.jpg', // 失败时默认图片 图片待替换
    srcList: [
      // {
      //   img: '/images/8.jpg',
      //   cid: '0',
      //   name: '狗'
      // },
      // {
      //   img: '/images/8.jpg',
      //   cid: '1',
      //   name: '猫'
      // },
      // {
      //   img: '/images/8.jpg',
      //   cid: '2',
      //   name: '兔子'
      // },
      // {
      //   img: '/images/8.jpg',
      //   cid: '3',
      //   name: '鼠'
      // }
    ]
  },
  lifetimes: {
    created() {
      this.getData();
    }
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
      console.log('show',this)
    }
  },
  methods: {
    // 获取宠物种类
    getData() {
      getPetsCate()
      .then((res) => {
        this.setData({
          srcList: res
        })
      })
    },
    //图片加载失败n时
    errorFn: function (event) {
      var index = event.currentTarget.dataset.index;
      this.data.srcList[index].img = this.data.errorUrl;
      this.setData({
        srcList: this.data.srcList
      })
    },
    // 点击宠物种类进入宠物选择页
    petClick(item) {
      let cid = item.currentTarget.dataset.cid || '';
      wx.navigateTo({
        url: `/pages/pet-choice/index?cid=${cid}`
      })
    }
  }
})