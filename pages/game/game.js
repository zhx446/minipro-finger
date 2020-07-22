// pages/game/game.js
var setInterGame
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 设置变量
        // 按钮是否可用
        flag: false, //初始化不可用
        // 记录获胜次数
        winNum: 0,
        // 提示输赢
        gameResult: '你赢啦！',
        //用户选择的图片
        userImg: '../images/scissor.png',
        // 电脑随机图片
        randomImg: '',
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
        setInterGame = setInterval(this.data.srcs[e.currentTarget.id], 100)
    },

    chioceImg: function(e) {
        if (this.data.flag) {
            this.setData({
                randomImg:
            })
        }
    },

    againGame: function(e) {

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