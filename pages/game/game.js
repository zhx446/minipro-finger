var numAi = 0
var timer
Page({
    data: {
        // 变量设置

        //控制按钮是否可点击
        btnState: false,
        //记录获胜次数
        winNum: 0,
        //游戏结果提示
        gameResult: '',
        //用户选择的图片
        imageUserScr: '../images/light.jpg',
        //电脑随机的图片
        randomImg: '',
        //石头剪刀布图片数组
        srcs: [
            '../images/fabric.png',
            '../images/scissor.png',
            '../images/stone.png'
        ]
    },

    //生命周期，刚进来
    onLoad: function() {
        //获取本地缓存“已经获胜的次数”
        var oldWinNum = wx.getStorageSync('winNum');
        //如果有缓存，那么赋值，否则为0
        if (oldWinNum != null && oldWinNum != '') {
            this.data.winNum = oldWinNum;
        }
        this.timerGo();
    },

    //点击按钮
    chioceImg(e) {
        console.log();
        if (this.data.btnState == true) {
            return;
        }

        //获取数组中用户的，石头剪刀布相应的图片。
        this.setData({
            imageUserScr: this.data.srcs[e.currentTarget.id]
        });
        //清除计时器
        clearInterval(timer);

        //获取数据源
        var user = this.data.imageUserScr;
        var ai = this.data.randomImg;
        var num = this.data.winNum;
        var str = '再接再厉!';

        //判断是否获胜
        if (user == "../images/stone.png" && ai == "../images/scissor.png") {
            //获胜后增加次数、改变文字内容、重新缓存获胜次数
            num++;
            str = '你赢啦!';
            wx.setStorageSync('winNum', num);
        };
        if (user == "../images/scissor.png" && ai == "../images/fabric.png") {
            num++;
            str = '你赢啦!';
            wx.setStorageSync('winNum', num);
        };
        if (user == "../images/fabric.png" && ai == "../images/stone.png") {
            num++;
            str = '你赢啦!';
            wx.setStorageSync('winNum', num);
        };

        //如果平局
        if (user == ai) {
            str = '平局平局!';
        }

        //刷新数据
        this.setData({
            winNum: num,
            gameResult: str,
            btnState: true
        });
    },

    //开启计时器
    timerGo() {
        timer = setInterval(this.move, 100);
    },

    //ai滚动方法
    move() {
        //如果大于等于3，重置
        if (numAi >= 3) {
            numAi = 0;
        }
        this.setData({
            //获取数组中Ai的，石头剪刀布相应的图片。
            randomImg: this.data.srcs[numAi],
        })
        numAi++;
    },

    againGame() {
        //控制按钮
        if (this.data.btnState == false) {
            return;
        }
        //从新开始计时器
        this.timerGo();
        //刷新数据
        this.setData({
            btnState: false,
            gameResult: '',
            imageUserScr: '../images/light.jpg'
        });
    }
})