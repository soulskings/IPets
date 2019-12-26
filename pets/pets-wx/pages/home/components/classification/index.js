/*
 * @Descripttion: 
 * @version: 
 * @Author: wupeng
 * @Date: 2019-12-20 09:46:11
 * @LastEditors  : wupeng
 * @LastEditTime : 2019-12-25 11:59:43
 */
// pages/home/components/classification/index.js
Page({
    data: {
        srcList:[
            {
                url:'/images/8.jpg',
                type: '0',
                name: '狗'
            },
            {
                url:'/images/8.jpg',
                type: '1',
                name: '猫'
            },
            {
                url:'/images/8.jpg',
                type: '2',
                name: '兔子'
            },
            {
                url:'/images/8.jpg',
                type: '3',
                name: '鼠'
            }
        ]
    },
    petClick(e) {
      wx.navigateTo({
          url: `/pages/petChoice/index?type=${e.currentTarget.dataset.map.type}`
      })
    }
  })