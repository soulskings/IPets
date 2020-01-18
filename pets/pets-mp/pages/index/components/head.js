// pages/index/components/head.js
import create from '../../../utils/create'
import store from '../../../store/index'
create.Component(store, {
  use: [
    'userInfo'
  ],
  /**
   * 页面的初始数据
   */
  data: {
    searchVal: '',
    list:'',
    avatarUrl: '',
    errorUrl: '/images/8.jpg', // 失败时默认图片 图片待替换
  },
  computed: {
    userInfo() {
      return this.userInfo
    }
  },
  lifetimes: {
    created() {
      console.log('created');
    }
  },
  pageLifetimes: {
    show: function () {
      // 页面被展示
      this.setData({
        avatarUrl: this.store.data.userInfo.avatarUrl || this.data.errorUrl
      })
    }
  },
  methods: {
    //图片加载失败n时
    errorFn (event) {
      let avatarUrl = this.store.data.userInfo.avatarUrl || this.data.errorUrl
      this.setData({
        avatarUrl: avatarUrl
      })
    },
    // 搜索
    search() {
      wx.navigateTo({
        url: `/pages/search-total/search-total`
      })
    }
  }
})