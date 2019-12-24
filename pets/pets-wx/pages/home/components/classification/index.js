/*
 * @Descripttion: 
 * @version: 
 * @Author: wupeng
 * @Date: 2019-12-20 09:46:11
 * @LastEditors  : wupeng
 * @LastEditTime : 2019-12-24 12:23:08
 */
// pages/home/components/classification/index.js
Page({
    data: {
        srcList:[
            {
                url:'/images/8.jpg',
                type: '狗'
            },
            {
                url:'/images/8.jpg',
                type: '猫'
            },
            {
                url:'/images/8.jpg',
                type: '兔子'
            },
            {
                url:'/images/8.jpg',
                type: '鼠'
            }
        ]
    },
    methods:{
      show: function(){
        console.log("show........")
      }
    }
  })