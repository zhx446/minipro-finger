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
        //获取本地缓存“已经获胜的次数”
        var oldWinNum = wx.getStorageSync('winNum');
        //如果有缓存，那么赋值，否则为0
        if (oldWinNum != null && oldWinNum != '') {
            this.data.winNum = oldWinNum;
        }
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

    // 点击图片停止
    choiceImg: function(e) {
        if (this.data.btn == false) {
            var chioceImg = e.target.dataset.imgid
            var changeImg = this.data.randomIdx
            let gameRes = this.data.gameRes
            var winNum = this.data.winNum
            let imgUser = this.data.imgUser
            if ((chioceImg == 0 && changeImg == 2) || (chioceImg == 1 && changeImg == 0) || (chioceImg == 2 && changeImg == 1)) {
                gameRes = '你赢了'
                winNum = ++winNum
            } else if (chioceImg == changeImg) {
                gameRes = '平局'
            } else {
                gameRes = '输了'
            }
            clearInterval(timer)
            this.setData({
                btn: true,
                gameRes: gameRes,
                winNum: winNum,
                imgUser: this.data.randomImg[chioceImg]
            })
        }
    },

    againGame: function(e) {
        if (this.data.btn == true) {
            timer = setInterval(this.changIdx, 100)
            this.setData({
                btn: false,
                imgUser: '../images/light.jpg'
            })
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