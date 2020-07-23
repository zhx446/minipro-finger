// pages/againgame/againgame.js
var timer = null
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 获胜次数
        winNum: 0,
        // 用户选择的图片
        imgUser: '../images/light.jpg',
        // 游戏结果提示
        gameRes: '',

        // 按钮是否可点击
        btn: false,
        // 随机图片
        randomImg: ['../images/stone.png', '../images/fabric.png', '../images/scissor.png'],
        // 随机图片下标
        randomIdx: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // 图片滚动定时器
        timer = setInterval(this.changIdx, 100)
    },
    // 改变图片下标
    changIdx: function(e) {
        if (this.data.randomIdx == 2) {
            this.data.randomIdx = -1
        }
        this.setData({
            randomIdx: this.data.randomIdx + 1
        })
    },

    choiceImg: function(e) {
        if (this.data.btn == false && e.target.dataset.imgid) {
            clearInterval(timer)
            this.setData({
                imgUser: e.target.dataset.imgid
            })
        }
    },

    againGame: function(e) {
        if (this.data.btn == true && e.target.dataset.imgid) {
            timer = setInterval(this.changIdx, 100)
            console.log('true')
        }
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