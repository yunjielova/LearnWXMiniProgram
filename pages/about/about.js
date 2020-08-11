// about.js
Page({
  data:{
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    ress:[]
  },
  bindGetUserInfo(event){
    console.log(event),
    this.setData({
      ress:event.detail.rawData
    })
  }
})