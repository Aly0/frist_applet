//index.js
//获取应用实例
var app = getApp()
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    index: 0,
    items: [
      {
        poster: 'http://p1.music.126.net/bSDGAYX7QuHvEG6hvPtmaw==/6049512976313503.jpg?param=130y130',
        name: '如花',
        author: '河图',
        src: 'http://fs.web.kugou.com/b91983f56d872d0eaddc6269b60d0113/59805879/G009/M01/10/10/qYYBAFUPLDaAW1TKADvfXRwSa4c773.mp3'
      },
      {
        poster: 'http://p3.music.126.net/izdGjlRlcR3sx26OXZOiHw==/6631154628171782.jpg?param=130y130',
        name: '参商',
        author: '不才',
        src: 'http://fs.web.kugou.com/620ebf608b98a895e4cac135eba100ea/598058c6/G013/M02/1B/1F/TQ0DAFUMMsmAOChEAEcFeFMgt9s960.mp3'
      },
      {
        poster: 'http://p4.music.126.net/Tk05gR0NxuGolX0rZGEPNw==/109951162928376906.jpg?param=130y130',
        name: '千梦',
        author: '李蚊香/佑可猫',
        src: 'http://fs.web.kugou.com/e446a6472ad4a3e6c007b04e79fe4384/598058ec/G098/M01/0F/09/og0DAFkYcfqABvEQADgUU_WJ_vw727.mp3',
      },
      {
        poster: 'http://imge.kugou.com/stdmusic/20170219/20170219021122157140.jpg',
        name: '凉凉',
        author: '杨宗纬/张碧晨',
        src: 'http://fs.web.kugou.com/f4bf871ccf7f2414a587ac3d3f098d35/59801d53/G083/M08/0E/04/kw0DAFhvcJSAAX3SAFFchlFbaO8093.mp3'
      },
      {
        poster: 'http://p1.music.126.net/bSDGAYX7QuHvEG6hvPtmaw==/6049512976313503.jpg?param=130y130',
        name: '为龙',
        author: '河图',
        src: 'http://m10.music.126.net/20170801152545/09850efec5efc16371af611267579d5e/ymusic/9dd6/311e/5003/1152b41da110e532554bf7536100b8ee.mp3'
      },
      {
        poster: 'http://p1.music.126.net/LBnYDAUED2mD1veBvBnC8g==/5859297464524710.jpg?param=130y130',
        name: '棠梨煎雪',
        author: '银临',
        src: 'http://m10.music.126.net/20170801174511/06d0d789c6132764135a326b235dcce4/ymusic/4d26/bdc3/0fcb/6c5ef34075e5fbf3557c8e06e0ec7b70.mp3'
      },
      {
        poster: 'http://p1.music.126.net/LBnYDAUED2mD1veBvBnC8g==/5859297464524710.jpg?param=130y130',
        name: '腐草为萤',
        author: '银临',
        src: 'http://m10.music.126.net/20170801174609/7123f5d5c85295badb16ec1fe5df4f23/ymusic/2a32/a40d/27e4/ec83ba696728190f61bb150705c756a0.mp3'
      },
      {
        poster: 'http://p3.music.126.net/P2XhDxCJ-P0UYNK0DVdVjA==/18712588395102550.jpg?param=130y130',
        name: '天命风流',
        author: '绯村柯北',
        src: 'http://m10.music.126.net/20170801153438/e51b4131d31ab4c628f9f09afa77da04/ymusic/e09d/fddc/ede4/6b6addec83e68215a255c44d0fd7af62.mp3'
      },
      {
        poster: 'http://p1.music.126.net/WoR2LbM1IFauFpvhBWOjqA==/6642149743396577.jpg?param=130y130',
        name: '惊鸿一面',
        author: '许嵩/黄龄',
        src: 'http://m10.music.126.net/20170801153756/8f398249f71007fdee03f6e3f7b63b95/ymusic/299f/6507/9256/8aba53ddf275ec07cf2585f2d875d04e.mp3'
      },
      {
        poster: 'http://p3.music.126.net/vGfQcJsYNKqsJXizn05iIQ==/2882919488804386.jpg?param=130y130',
        name: '黯然销魂',
        author: '玄觞',
        src: 'http://m10.music.126.net/20170801174704/8c285b9649ba202d08a370e2a214b2fc/ymusic/e1aa/2493/dec3/df06ed23ab9ad4baa90478cf9891b615.mp3'
      },
    ],
    name: "ssddd"
  },//index.js

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onShareAppMessage: function () {
    return {
      title: '试试微信小程序',
      desc: '最具人气的小程序!',
      path: '/pages/user?id=123',
    }
  },
  play: function (e) {
    console.log(e.currentTarget.id),
      // var index = e.currentTarget.id,
      this.setData({
        "index": e.currentTarget.id
      })
  }
})
