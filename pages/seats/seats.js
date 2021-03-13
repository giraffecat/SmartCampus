// pages/seats/seats.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seats:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let res =[]
    for(let i=1; i<50;i++){
      var seat = {
        num: i,
        morn_ordered : false,
        aftern_ordered: false,
        even_ordered: false
      }
      res.push(seat)
    }
    this.setData({
      seats:res
    })   
  },
  onTap(event){
    let that = this
    const seat_id = event.currentTarget.dataset.seat_id
    console.log(seat_id)
    var item_selected = new Array()
    if(that.data.seats[seat_id-1].morn_ordered == false){
      item_selected.push('早上(8:00-12:00)')
    }
    if(that.data.seats[seat_id-1].aftern_ordered == false){
      item_selected.push('下午(2:00-6:00)')
    }
    if(that.data.seats[seat_id-1].even_ordered == false){
      item_selected.push('晚上(6:00-10:30)')
    }
    console.log(item_selected)
    wx.showActionSheet({
      itemList: item_selected,
      success (res) {
        wx.showModal({
          title: '提示',
          content: '确定预约座位'+seat_id+"的"+item_selected[res.tapIndex]+"的时段么？",
          success(success){
            if (success.confirm) {
              console.log(res.tapIndex)
              let seats = that.data.seats
              switch(item_selected[res.tapIndex]){
                case '早上(8:00-12:00)':
                  seats[seat_id-1].morn_ordered = true;
                  break;
                case '下午(2:00-6:00)':
                  seats[seat_id-1].aftern_ordered = true;
                  break;
                case '晚上(6:00-10:30)':
                  seats[seat_id-1].even_ordered = true;
                  break;
              }
              console.log(seats[seat_id-1])
              that.setData({
                seats : seats
              })
            } else if (success.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      },
      fail (res) {
        console.log(res.errMsg)
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