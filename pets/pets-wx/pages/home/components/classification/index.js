// pages/home/components/classification/index.js
Component({
    data: {
        srcList:[
            {
                url:'/images/8.jpg',
                type: '狗'
            },
            {
                url:'/images/8.jpg',
                type: '猫'
            },
            {
                url:'/images/8.jpg',
                type: '兔子'
            },
            {
                url:'/images/8.jpg',
                type: '鼠'
            }
        ]
    },
    methods:{
      show: function(){
        console.log("show........")
      }
    }
  })