// pages/orderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders:[{
      seat_num : 'A21',
      order_time: '2021-03-07 早上',  
    },
    {
      seat_num : 'A22',
      order_time: '2021-03-07 中午',  
    },
    {
      seat_num : 'A23',
      order_time: '2021-03-07 下午',  
    },
    {
      seat_num : 'A21',
      order_time: '2021-03-07 晚上',  
    }
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onGoToDetail(event){
    wx.navigateTo({
      url: '/pages/orderDetail/orderDetail',
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