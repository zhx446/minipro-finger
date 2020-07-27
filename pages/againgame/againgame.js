// pages/againgame/againgame.js
// 给定时器取个名字，方便取消定时器时使用
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
        // 随机图片 数组的形式
        randomImg: ['../images/stone.png', '../images/fabric.png', '../images/scissor.png'],
        // 随机图片下标 定义下标变量与randomImg相关联 通过下标改变图片的显示
        randomIdx: 0
    },
    /**
     * 一、让图片滚动起来
     * 1、设置定时器 setInterval()
     * 二、当点击下面三张图的时候停止滚动 把选择的图片放到左边 再来一次不可点击
     * 三、点击再来一次 左边图片变成原始图片 右边滚动起来 在选择出拳
     * 四、设置缓存 让获胜的次数退出能保留
     */

    /**
     * 1、设置变量  数组可以使用 下标可以找到
     * 2、判断是什么事件下执行 执行的事件是什么
     * 
     */

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // 获取缓存
        console.log(wx.getStorageSync('H'))
            //获取本地缓存“已经获胜的次数”
        var oldWinNum = wx.getStorageSync('winNum');
        //如果有缓存，那么赋值，否则为0
        if (oldWinNum != null && oldWinNum != '') {
            // 从data中找到winNum变量，并赋值
            this.data.winNum = oldWinNum;
        }
        // 设置图片滚动定时器  调用函数      时间
        timer = setInterval(this.changIdx, 100)
    },
    // 创建函数 改变图片下标控制显示
    changIdx: function(e) {
        // 当下标等于2时
        if (this.data.randomIdx == 2) {
            // 当下标等于2时 设置成 负一 -1
            this.data.randomIdx = -1
        }
        // 渲染到视图层
        this.setData({
            // 进行加1
            randomIdx: this.data.randomIdx + 1
        })
    },

    // 点击图片停止
    choiceImg: function(e) {
        // 当图片点击时要改变的东西
        // 当图片点击可用时
        if (this.data.btn == false) {
            // 获取图片imgid数值  e.target.dataset 找到自定义id属性
            var chioceImg = e.target.dataset.imgid
                // 获取随机图片的下标数值
            var changeImg = this.data.randomIdx
                // 游戏结果提示
            let gameRes = this.data.gameRes
                // 获胜次数
            var winNum = this.data.winNum
                // 用户选择的图片
            let imgUser = this.data.imgUser
                // 使用获取图片imgid数值 和 获取随机图片的下标数值 进行判断
            if ((chioceImg == 0 && changeImg == 2) || (chioceImg == 1 && changeImg == 0) || (chioceImg == 2 && changeImg == 1)) {
                // 提示文字
                gameRes = '你赢了'
                    // 获胜次数加油 ++在前面先加一再赋值  ++再后面先赋值再加一
                winNum = ++winNum
                    // 如果两边相等则平局
            } else if (chioceImg == changeImg) {
                gameRes = '平局'
                    // 剩下的结果就是输了
            } else {
                gameRes = '输了'
            }
            // 点击图片时 清除定时器
            clearInterval(timer)
                // 赋值到对应的变量
            this.setData({
                // 按钮可用
                btn: true,
                gameRes: gameRes,
                winNum: winNum,
                imgUser: this.data.randomImg[chioceImg]
            })
        }
    },
    // 点击再来一次事件
    againGame: function(e) {
        // 当按钮可用时
        if (this.data.btn == true) {
            // 首先开启定时器
            timer = setInterval(this.changIdx, 100)
            this.setData({
                // 按钮不可用
                btn: false,
                // 变成初始化图片
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
        // 设置缓存
        // wx.setStorageSync('H', '2')
        var that = this
        wx.setStorage({
            data: this.data.winNum,
            key: 'zhx',
            success: function() {
                that.setData({
                    winNum: that.data.winNum

                })
            }
        })

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