//index.js
//获取应用实例
var app = getApp()
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    motto: '那些年的歌，不知道有没有唤起你们青春的回忆',
    userInfo: {},
    onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
    movies: [
      {url:'../image/1.jpg'},
      { url: '../image/2.jpg' },
      { url: '../image/3.jpg' },
      { url: '../image/4.jpg' },
      { url: '../image/5.jpg' },
    ],   
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration:500,
    musics:[
      {
      poster: 'http://p3.music.126.net/Y6SrXnKMHZsJ5Kl2eWBgkA==/74766790706381.jpg?param=130y130',
      name: '囍帖街',
      author: '谢安琪',
      src: 'http://fs.web.kugou.com/a4d6f06f2a44826f80162accd1335a8c/5980552c/G003/M01/1B/09/o4YBAFT99_GAA3QxADLpN0LLjdw882.mp3',
      }
    ],
    types:[
      { 
        id:0,
        url: '../navigator/navigator',
        src: 'http://p4.music.126.net/23xYghjQfw0fo7OSzl_LKA==/114349209306674.jpg?param=130y130',
        ms: '粤语\n祈求天地放过一双恋人...'
        },
      {
        id:1,
        url: '../gufeng/gufeng',
        src: 'http://p1.music.126.net/bSDGAYX7QuHvEG6hvPtmaw==/6049512976313503.jpg?param=130y130',
        ms: '古风\n她等到人比黄花瘦...'
      },
      {
        id:2,
        src: 'http://p4.music.126.net/TQ7zcoXKWi74Ofly2UuU2Q==/18258490091280315.jpg?param=130y130',
        ms: '流行\n吹啊吹啊 我的骄傲放纵...',
        url:'../liuxing/liuxing'
      },
      {
        id:3,
        src: 'http://p1.music.126.net/SCfmMptusSmpCddIRlyP-A==/47279000008415.jpg?param=130y130',
        ms: '童年\n一寸光阴一寸金...',
        url:'../tongnian/tongnian'
      }
        
    ] 
},//index.js
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
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
   startRecord:function(options){  
     wx.startRecord({
       success: function (res) {
         var tempFilePath = res.tempFilePath
         console.log(tempFilePath)
       },
       fail: function (res) {
         //录音失败
       }
     })
   },
   stopRecord: function () {
       wx.stopRecord()
   },
   onPullDownRefresh: function () {
     wx.stopPullDownRefresh()
   }
})
