Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[
      {title:"集团总院",distance:"距离您524m",image:"/pages/images/hos1.png",link:"/pages/page1/page1",latitude: 29.97374, 
      longitude: 121.600983},
      {title:"炼化院区",distance:"距离您532m",image:"/pages/images/hos2.png",link:"/pages/page2/page2",latitude: 29.97374, 
      longitude: 121.600983},
      {title:"澥浦院区",distance:"距离您302m",image:"/pages/images/hos3.png",link:"/pages/page3/page3",latitude: 29.97374, 
      longitude: 121.600983},
      {title:"九龙湖院区",distance:"距离您2.3km",image:"/pages/images/hos4.png",link:"/pages/page4/page4",latitude: 29.97374, 
      longitude: 121.600983},
      {title:"骆驼院区",distance:"距离您2.4m",image:"/pages/images/hos5.png",link:"/pages/page5/page5",latitude: 29.97374, 
      longitude: 121.600983},
      {title:"庄市院区",distance:"距离您524m",image:"/pages/images/hos6.png",link:"/pages/page6/page6",latitude: 29.97374, 
      longitude:121.600983}
    ],
    typename:"",
    
  },
onClick(e){
  let Link = e.currentTarget.dataset.item.link
  wx.navigateTo({
    url:Link,
  })
}, 
ackNowledge(e){
//  console.log(e.target.dataset)
 this.setData({
    typename:e.detail.value
 })
//  this.onLoad()
//   console.log(this.data.typename)
},
comSort(){
  wx.navigateTo({
    url: '/pages/tab1/tab1',
  })
},
disSort(){
  wx.navigateTo({
    url: '/pages/tab2/tab2',
  })
},
typeSort(){
  wx.navigateTo({
    url: '/pages/tab3/tab3',
  })
},
  /**,
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
    // let zJ=this.selectComponent("#search_input")
    // zJ.onClick()
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