// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },

  usernameInput:function(e)
  {
    this.setData({
      username: e.detail.value
    })
  },
  passwordInput:function(e)
  {
    this.setData({
      password: e.detail.value
    })
  },

  onTap: function(params) {
    wx.request({
      url: 'http://localhost:8080/login',
      data:{
        username:this.data.username,
        email:this.data.password
      },
      success(res){
        if(res.data =='ok'){
          wx.showToast({
            title: '登陆成功',
          })
          wx.switchTab({
          url:"/pages/posts/posts"    
        })
        }else{
          wx.showToast({
            title: "登陆失败",
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})