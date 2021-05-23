// pages/page1/page1.js
// let List1=[]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"宁波市镇海区人民医院医疗集团总院",
    id:"0574-86655002",
    address:"宁波市镇海区人民医院医疗集团总院位于镇海区新城行政文化中心",
    longitude:121.600983,
    latitude:29.97374,
    
  },
  goThere(){
      
    var _this =this
    wx.getLocation({
      type: 'gcj02',//?
      success(res){
      wx.openLocation({
          latitude: _this.data.latitude,
          longitude: _this.data.longitude,
          name:_this.data.name
        })
    
        
      }
      
    })
  },
  booking(){
    console.log("https://www.nbgzjk.cn/")
  },
  moveToLocation(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    // console.log(this.data.goods)
    // List1 = this.data.goods
    // console.log("List: ",List1)
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