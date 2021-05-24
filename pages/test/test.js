var QQMapWX = require('../../js/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({

  key: 'JATBZ-57SKQ-U4N5A-GHM7J-3H6VZ-V2FOV' // 必填

});
// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      distance:''
  },
  bindtap(){
    var _that = this
    var demo = new QQMapWX({
      key: 'JATBZ-57SKQ-U4N5A-GHM7J-3H6VZ-V2FOV'  // 必填
    });
    // 调用接口
    demo.calculateDistance({
        to: [{

            latitude: 39.917990, //商家的纬度
            longitude: 116.397027, //商家的经度
        }],
        success: function(res) {
            let hw = res.result.elements[0].distance //拿到距离(米)
            if (hw && hw !== -1) { //拿到正确的值
                //转换成公里
                hw = (hw / 2 / 500).toFixed(2) + '公里'
            } else {
                hw = "距离太近或请刷新重试"
            }
      
            console.log('腾讯地图计算距离商家' + hw);
        }
    });

  
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