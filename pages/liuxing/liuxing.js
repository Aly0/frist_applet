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
        poster: 'http://p4.music.126.net/TQ7zcoXKWi74Ofly2UuU2Q==/18258490091280315.jpg?param=130y130',
        name: '野子',
        author: '苏运莹',
        src: 'http://m10.music.126.net/20170801160232/90a67ec436b8940abc0b6cb45f9a75ac/ymusic/c407/2e5b/9354/441ac93d45fbc109a0bc665c405f17ca.mp3'
      },
      {
        poster: 'http://p3.music.126.net/WDcYhuw0EejVMVCxgFl0Bg==/120946279068536.jpg?param=130y130',
        name: '小小',
        author: '容祖儿',
        src: 'http://m10.music.126.net/20170801160718/cc835ea1e7a0476caa8a8445d8f649f6/ymusic/0a42/e65f/2a6a/06d42d1f9dc9b89f4e616d3ddc338799.mp3'
      },
      {
        poster: 'http://p3.music.126.net/636SSPpKW0avAqkK1QgzgQ==/43980465112096.jpg?param=130y130',
        name: '情网',
        author: '张学友',
        src: 'http://m10.music.126.net/20170801161725/74a2525eb3a55601e7796e4dce81ae40/ymusic/6b30/8e88/2580/5adcdfc9b418d53f48ac0f524b1888e0.mp3'
      },
      {
        poster: 'http://p3.music.126.net/PSrNjqVME22KFmNz2rNXJQ==/109951162885413509.jpg?param=130y130',
        name: '小幸运',
        author: '萧忆情',
        src: 'http://m10.music.126.net/20170801173956/d8df54210c76c1771827f8d0558b76bb/ymusic/87b4/4901/0391/b80a4384f56054059db7843a9eb67ffe.mp3'
      },
      {
        poster: 'http://p3.music.126.net/PSrNjqVME22KFmNz2rNXJQ==/109951162885413509.jpg?param=130y130',
        name: '童话镇',
        author: '萧忆情',
        src: 'http://m10.music.126.net/20170801173842/059e19e00d4fa000570792f3a47b9e1b/ymusic/c974/a93b/a793/c6cca1c74386c46e412db8db4b825994.mp3'
      },
      {
        poster: 'http://p1.music.126.net/z8nlSERm9CL8GAyP5rZ8OQ==/3294136840661516.jpg?param=130y130',
        name: '身骑白马',
        author: '徐佳莹',
        src: 'http://m10.music.126.net/20170801161009/d49f033a825f314954c32c2d5c41a8b1/ymusic/4fd6/28e6/1412/1620a329f5e05d34b3ac01378f88d20b.mp3'
      },
      {
        poster: 'http://p1.music.126.net/z8nlSERm9CL8GAyP5rZ8OQ==/3294136840661516.jpg?param=130y130',
        name: '不醉不会',
        author: '徐佳莹',
        src: 'http://m10.music.126.net/20170801161123/f24b4eaffc63204ec0e08e1de451eded/ymusic/2ce1/1b25/727d/59f5fa256b7c14d3a3cd4cf4e972ac74.mp3'
      },
      {
        poster: 'http://p3.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
        name: '平凡之路',
        author: '朴树',
        src: 'http://m10.music.126.net/20170801174055/08ba64c6a82c563e24c9dca2bddf1c1a/ymusic/fc6d/0a5c/db75/2b16355237283456b93e133c2d8ad6ef.mp3'
      },
      {
        poster: 'http://p3.music.126.net/yXP2lwxS1sJDpZb9T5kTFg==/19064432114268925.jpg?param=130y130',
        name: '火柴天堂',
        author: '齐秦',
        src: 'http://m10.music.126.net/20170801162758/e201f42002e7c752ef43b8fd38cdebcb/ymusic/e673/271d/6e09/ef56aa211168d3712ab259e032fae7c6.mp3'
      },
      {
        poster: 'http://singerimg.kugou.com/uploadpic/softhead/400/20160426/20160426113251863.jpg',
        name: '漂洋过海来看你',
        author: '丁当',
        src: 'http://fs.web.kugou.com/5c84914632d4060ea9245549a114247d/59803625/G039/M07/1D/10/B5QEAFYV9DuAKmhrAEEhML0NXVM587.mp3'
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
