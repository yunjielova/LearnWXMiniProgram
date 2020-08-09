// about.js
Page({
  data:{
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  bindGetUserInfo(event){
    console.log(event)
  }
})