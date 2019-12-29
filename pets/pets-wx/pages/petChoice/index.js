/*
 * @Descripttion: 
 * @version: 
 * @Author: wupeng
 * @Date: 2019-12-25 10:36:40
 * @LastEditors  : wupeng
 * @LastEditTime : 2019-12-25 14:50:25
 */
// pages/petChoice/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        category: '1',
        categoryList: [
            {
                type: '0',
                name: '说sddfsd'
            },
            {
                type: '1',
                name: '说沙芬是'
            }
        ],
        petList: [
            {
                pid: 0,
                name: '十点多'
            },
            {
                pid: 1,
                name: '十点多dsf'
            }
        ]
    },
    // 种类切换方法
    categoryClick(e) {
        this.setData({
            category: e.currentTarget.dataset.category
        })
    },
    // 宠物点击方法
    petClick(e) {
        wx.navigateTo({
            url: `/pages/petStrategy/index?type=${e.currentTarget.dataset.pid}`
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.category = options.type;
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady (e) {
        console.log(e)
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})