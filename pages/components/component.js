// pages/components/component.js
let medicinerArr =[]
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      
    typename:{
      type:String,
      value:''
    },
    innerData:{
      type:String, //此处可以规定值的类型
        value: 'defaultValue' //此处可以设置默认值,如果不传值则为默认值
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    medicineArr:[{
      "name":"宁波市镇海区人民医院医疗集团总院",
      "medicine":["感冒药","止痛药","发烧","止血药"],
      "distance": 524,//米
      "id":"1"
    },
    {
      "name":"宁波市镇海区人民医院医疗集团炼化院区",
      "medicine":["感冒药","止痛药","止血药","流鼻涕","嗓子疼"],
      "distance": 532,//米
      "id":"2"
    },
    {
      "name":"波市镇海区人民医院医疗集团澥浦院区",
      "medicine":["止痛药","止血药","眼睛疼"],
      "distance": 302,//米
      "id":"3"
    },
    {
      "name":"宁波市镇海区人民医院医疗集团九龙湖院区",
      "medicine":["眼睛疼","止痛药","发烧","止血药","腹泻","流鼻涕"],
      "distance": 23000,//米
      "id":"4"
    },
    {
      "name":"宁波市镇海区人民医院医疗集团骆驼院区",
      "medicine":["感冒药","止血药","嗓子疼","眼睛疼"],
      "distance": 2.4,//米
      "id":"5"
    },
    {
      "name":"宁波市镇海区人民医院医疗集团庄市院区",
      "medicine":["感冒药","止痛药","流鼻涕","嗓子疼","眼睛疼"],
      "distance": 524,//米
      "id":"6"
    }],
    typename:""
  },
  //父组件传值
  attached(){
    console.log("传输的值为："+this.properties.typename)
  },
  /**
   * 组件的方法列表
   */
  methods: {
     innerClick: function(){
        //使用triggerEvent关键字将事件传递给页面
        //name即为可自定义的在外面触发的标识
        //data为传递给页面方法的值
		this.triggerEvent("name",data,{})
     },
    onClick(e){
   
       let x = this.data.medicineArr.length
       for (let i = 0; i < x; i++) {
        let y = this.data.medicineArr[i].medicine.length
        // console.log(y)
        for (let j = 0; j < y; j++) {
         let str = "666"
         let b = this.data.medicineArr[i].medicine[j].includes(str)
        //  console.log(b)
        if(b==true){
          console.log(this.data.medicineArr[i].name)
        }
        }
       }
     
      // for (let i = 0; i <this.data.medicineArr.length; i++) {
      //   const element = array[i];
      //   console.log(element)
        
      // }
      //  console.log(this.data.medicineArr)
    
    },
    backS(){
      this.setData({
        typename:this.properties.typename
      })
      this.triggerEvent("typename",this.data.typename)
    },
    comS(){
      let x = this.data.medicineArr.length

    }
  }
})
