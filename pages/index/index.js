//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toSearchPage: function() {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  onGotUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onLoad: function() {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    wx.getUserInfo({
      success: function(res) {
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })

  }
})