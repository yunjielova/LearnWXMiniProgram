// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },
  handleChooseAlbum(){
    // 系统api，让用户在相册中选中图片或者拍照
    wx.chooseImage({
      success:(res) => {
        // console.log(res)
        // 1.取出路径
        const path = res.tempFilePaths[0]
        // 2.设置imagePath
        this.setData({
          imagePath:path
        })
      }
    })
  },
  handload(){
    console.log('图片加载完成')
  }
})