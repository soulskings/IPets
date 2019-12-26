/*
 * @Descripttion: 
 * @version: 
 * @Author: wupeng
 * @Date: 2019-12-26 17:52:50
 * @LastEditors  : wupeng
 * @LastEditTime : 2019-12-26 18:05:27
 */
// pages/petStrategyList/components/strategySearch/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        inputValue: '1'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        search(e) {
            this.triggerEvent('search', e.detail.value)
        }
    }
})
