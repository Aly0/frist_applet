//index.js
//获取应用实例
var app = getApp()
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    index:0,
    items:[
      {
      poster: 'http://p1.music.126.net/VDUO-rQfbWCpKGHWRlpBWg==/18571850906444326.jpg?param=130y130',
      name:'暗涌',
      author:'王菲',
      src:'http://fs.web.kugou.com/c7458f8042abf23d9749283e6afcb236/59805610/G006/M08/00/11/Rg0DAFS2zCyAR4QHAD_L7VWagX4829.mp3'
      },
      {
        poster: 'http://p1.music.126.net/hk5HYQOVU9pP38dS0sKUsQ==/2246302255592729.jpg?param=130y130',
        name: '大哥',
        author: '卫兰',
        src: 'http://fs.web.kugou.com/8741873126089204287718a870815a2f/59804f79/G076/M07/17/03/7IYBAFguuXmALybxADmVZfdYWv0412.mp3'
      },
      {
        poster: 'http://p4.music.126.net/tzmGFZ0-DPOulXS97H5rmA==/18712588395102549.jpg?param=130y130',
        name: '傻女',
        author: '陈慧娴',
        src: 'http://fs.web.kugou.com/093c31b114dc9e686fc6a174b43ae3b2/59805687/G002/M02/1D/1F/ooYBAFT6mXCAVO5EADgSn-m1H8E992.mp3'
      },
      {
        poster: 'http://p3.music.126.net/Bl_xdJtNTcp4RDdI5huaZA==/6632254138820634.jpg?param=130y130',
        name: '七友',
        author: '梁汉文',
        src: 'http://fs.web.kugou.com/377c89aa339555ac744017d97217e5ff/598056b2/G003/M03/00/05/Qw0DAFT6BOyAZ-oSAD9IAFsbPgI256.mp3'
      },
      {
        poster:'http://p1.music.126.net/N1pCSE3EtocC7NowAAuEHQ==/74766790706391.jpg?param=130y130',
      name: '钟无艳',
      author: '谢安琪',
      src:'http://fs.web.kugou.com/3b0412388e5d7a24a0e63d0f5fe92215/59805658/G008/M00/19/10/qIYBAFUI5I2Adf1fAEOwCjSLzxk917.mp3'
      },
      {
        poster: 'http://p3.music.126.net/RpVdUjmSASHc0CFSM0sZVA==/27487790706503.jpg?param=130y130',
        name: '明天以后',
        author: '林峯/泳儿',
        src: 'http://fs.web.kugou.com/e56d3ee131e8b823c41781c6b3236da4/5980571a/G001/M05/07/0D/QQ0DAFS4QYWAcEjwADyJUK9Ykz4685.mp3'
      },
      {
        poster: 'http://p4.music.126.net/-yYvrC0SLv1dD_bDnEUE7g==/96757023261526.jpg?param=130y130',
        name: '友情岁月',
        author: '郑伊健',
        src: 'http://fs.web.kugou.com/c50c35a2701c453bf26b1340c05f9b2f/59805743/G003/M08/1C/09/o4YBAFUBExyADrrHADRy8HDOATI820.mp3'
      },
      {
        poster: 'http://imge.kugou.com/stdmusic/20141125/20141125165554197911.jpg',
        name: '越难越爱',
        author: '吴若希',
        src: 'http://fs.web.kugou.com/2afe3cda06b0855ab2dcb79d6dbe5785/59800987/G011/M04/12/19/Sw0DAFUK1BqAW3gBADo1OG_Xwlc244.mp3'
      },
      {
        poster: 'http://p4.music.126.net/23xYghjQfw0fo7OSzl_LKA==/114349209306674.jpg?param=130y130',
        name: '少女的祈祷',
        author: '杨千嬅',
        src: 'http://fs.web.kugou.com/6ec8502a8b1a8ee513cd41e4ab6034cd/5980541e/G004/M05/14/19/RA0DAFS526aAIYPmADZ8Qbh5lFQ724.mp3'
      },
      {
        poster: 'http://p1.music.126.net/jTjlHs4c_E7dV4O-S4hcMQ==/39582418616753.jpg?param=130y130',
        name: '可惜我是水瓶座',
        author: '杨千嬅',
        src: 'http://fs.web.kugou.com/b8519474171e7426ee7c27b09de879ce/59805745/G001/M07/1E/05/QQ0DAFS3hCWAVMdiADRQANBYs4M965.mp3'
      },
    ],
    name:"ssddd"
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
  play:function(e){
    console.log(e.currentTarget.id),
    // var index = e.currentTarget.id,
    this.setData({
      "index": e.currentTarget.id
    })
  }
})
