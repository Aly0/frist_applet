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
        poster: 'http://p1.music.126.net/sZR0U1r8BCTxfKJnh7gTZA==/102254581395236.jpg?param=130y130',
        name: '童年',
        author: '罗大佑',
        src: 'http://m10.music.126.net/20170801163857/419085c8528de7e7b8468186696edc20/ymusic/03d1/9ceb/c37d/96d6f2caf6dacde6b3814f26c81ce15d.mp3'
      },
      {
        poster: 'http://p3.music.126.net/N2J8EfG62oL8R39ocUNPlQ==/117647744187841.jpg?param=130y130',
        name: '送别',
        author: '天使童声合唱团',
        src: 'http://m10.music.126.net/20170801164317/e26c8107325d1476df4ff59b69190ed9/ymusic/4d80/49b4/eef5/fc935b98924fb72146e835180b508cfd.mp3'
      },
      {
        poster: 'http://p1.music.126.net/SCfmMptusSmpCddIRlyP-A==/47279000008415.jpg?param=130y130',
        name: '小草',
        author: '姚芊羽',
        src: 'http://m10.music.126.net/20170801172541/d0c983f61de79041bb632a6cd0b118e4/ymusic/16cb/9e90/01ec/c1cf18d84bc301828a1acad6b4994536.mp3'
      },
      {
        poster: 'http://imge.kugou.com/stdmusic/20150905/20150905114707270033.jpg',
        name: '兰花草',
        author: '卓依婷',
        src: 'http://fs.web.kugou.com/128c9a5ea5ec415760d47d0aff5a9fda/598042a2/G009/M09/0F/13/SQ0DAFT-6MSAf0mJAC1yLixb5Do704.mp3'
      },
      {
        poster: 'http://p1.music.126.net/txaWwK_-wcxBSwPgDePR0Q==/63771674428020.jpg?param=130y130',
        name: '虫儿飞',
        author: '郑伊健',
        src: 'http://m10.music.126.net/20170801173212/61c1f1f94eb032b7e11c7baf39788378/ymusic/db8d/e876/f5d0/4cd6968d76dd9ed2cfadeaf51e17561a.mp3'
      },
      {
        poster: 'http://p4.music.126.net/R4ewZdXgHGS_zi_2jYurAw==/18532268488166483.jpg?param=130y130',
        name: '橄榄树',
        author: '齐豫',
        src: 'http://m10.music.126.net/20170801171746/45d2b4de2bfe1c79c985da4ed06eb9c2/ymusic/c129/044c/1c2c/b13b4ecba32004941416c3523841b2bf.mp3'
      },
      {
        poster: 'http://imge.kugou.com/stdmusic/20150828/20150828164718987933.jpg',
        name: '乡间小路',
        author: '卓依婷',
        src: 'http://fs.web.kugou.com/f1e700b116f52b2a3cd4dc4ed83aea5f/59803ba8/G005/M03/07/18/pYYBAFT_Ea2Acr9dAC4FuTlovjY819.mp3'
      },
      {
        poster: 'http://p4.music.126.net/0LP5TbD_-nZlYR4nEDe2Vg==/97856534887064.jpg?param=130y130',
        name: '明天会更好',
        author: '群星',
        src: 'http://m10.music.126.net/20170801173332/e9674287500d2ee8015eb815225a3398/ymusic/75ce/e540/5091/c0c5f7cde606ee3e50faeec0e026a81b.mp3'
      },
      {
        poster: 'http://p3.music.126.net/G58HeEb08gGsVSKOrWCXxg==/103354093023080.jpg?param=130y130',
        name: '外婆的澎湖湾',
        author: '潘安邦',
        src: 'http://m10.music.126.net/20170801173451/c248600f871898cc787d5802ce17676d/ymusic/3a25/0dea/bd02/fed22ca1c19f0f4c154c74ba8852c86d.mp3'
      },
      {
        poster: 'http://p3.music.126.net/jBkyWclqzFYVkk4fM3qLmw==/26388279081800.jpg?param=130y130',
        name: '听妈妈讲那过去的事情',
        author: '黑鸭子',
        src: 'http://m10.music.126.net/20170801165701/706593148f5464b34d25fec0f1ac403f/ymusic/2de2/9dc2/934c/d4057a999bab7f3c589f572c7594c063.mp3'
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
