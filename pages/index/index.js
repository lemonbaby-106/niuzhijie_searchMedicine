Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[
      {title:"宁波市镇海区人民医院医疗集团总院",distance:"距离您524m",image:"/pages/images/hos1.png",link:"/pages/page1/page1"},
      {title:"宁波市镇海区人民医院医疗集团炼化院区",distance:"距离您532m",image:"/pages/images/hos2.png",link:"/pages/page2/page2"},
      {title:"宁波市镇海区人民医院医疗集团澥浦院区",distance:"距离您302m",image:"/pages/images/hos3.png",link:"/pages/page3/page3"},
      {title:"宁波市镇海区人民医院医疗集团九龙湖院区",distance:"距离您2.3km",image:"/pages/images/hos4.png",link:"/pages/page4/page4"},
      {title:"宁波市镇海区人民医院医疗集团骆驼院区",distance:"距离您2.4m",image:"/pages/images/hos5.png",link:"/pages/page5/page5"},
      {title:"宁波市镇海区人民医院医疗集团庄市院区",distance:"距离您524m",image:"/pages/images/hos6.png",link:"/pages/page6/page6"}
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