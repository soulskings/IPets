/*
 * @Descripttion: 
 * @version: 
 * @Author: wupeng
 * @Date: 2019-12-26 14:24:22
 * @LastEditors  : wupeng
 * @LastEditTime : 2019-12-26 18:23:30
 */
// components/service/strategyList/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        config: {
            type: Object,
            value: {
                cencelCollectBtn: {
                    type: Boolean,
                    value: false
                }
            }
        },
        dataObj: { // 属性名
            type: Object,
            value: {}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        result: {
            pid: '',
            name: ''
        }
    },
    lifetimes: {
        // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
        onLoad() {
            console(1)
        },
    },
    pageLifetimes: {
        show() {
          // 页面被展示
        //   console.log(this.data.dataObj)
          this.init();
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
        // 初始化数据
        init(obj) {
            Object.keys(this.data.result).forEach((key) => {
                this.data.result[key] = this.data.dataObj[key];
            })
            this.setData({
                result: this.data.result
            })
            console.log(this.data.result)
        },
        cardClick(e) {
            this.triggerEvent('click', e.currentTarget.dataset.result)
        }
    }
})
