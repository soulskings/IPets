// pages/user/components/userBody.js
import { petsQuit } from '../../../http/index.js'
import create from '../../../utils/create'
import store from '../../../store/index'
create.Component(store, {
  use: [
    'userInfo',
    'hasUserInfo'
  ],
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
    /**
     * 进入收藏页
     */
    goCollect() {
      wx.navigateTo({
        url: '/pages/my-collections/index'
      })
    },
    quit() {
      petsQuit()
        .then((res) => {
          wx.clearStorageSync();
          this.store.data.userInfo = {};
          this.store.data.hasUserInfo = false;
        })
    }
  }
})
