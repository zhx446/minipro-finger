// pages/game/game.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 记录获胜次数
        winNum: 0,
        // 提示输赢
        gameResult: '你赢啦！',
        // 电脑随机图片
        randomImg: '../images/scissor.png',
        userImg: '',
        // 石头剪刀布图片数组
        srcs: [
            '../images/scissor.png',
            '../images/fabric.png',
            '../images/stone.png'
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        setTimeout(function() {
            that.setData({
                random: '../images/stone.png'
            })
        }, 2000);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})