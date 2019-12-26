/*
 * @Descripttion: 
 * @version: 
 * @Author: wupeng
 * @Date: 2019-12-26 15:09:40
 * @LastEditors  : wupeng
 * @LastEditTime : 2019-12-26 18:18:31
 */
// pages/petStrategyList/components/strategyList/index.js
Component({

    /**
     * 页面的初始数据
     */
    properties:{
        inputValue: {
            type: Object,
            value: {}
        }
    },
    data: {
        petList: [
            {
                pid: '0',
                name: '书法家李'
            },
            {
                pid: '1',
                name: 'sdf'
            },
            {
                pid: '2',
                name: 'sfsd'
            },
            {
                pid: '3',
                name: '水电费'
            }
        ]

    },
    // 监听
    observers: {
        inputValue(data) {
            console.log(data)
            this.getData(data);
        }
    },
    lifetimes: {
        // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
        onLoad() {
            console(11111)
        },
    },
    pageLifetimes: {
        show() {
          // 页面被展示
          console.log('show--')
        },
        hide: function() {
          // 页面被隐藏
          console.log('hide')
        },
        resize: function(size) {
          // 页面尺寸变化
          console.log('size')
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        // 获取列表数据
        getData(data) {
            let params;
            if (data) {
                params = data;
            } else {
                params = {
                    name: '',
                    price: ''
                }
            }
            console.log(params,'获取数据')
        },
        goDetail(e) {
            console.log(e,'goDetail')
        }
    }
})