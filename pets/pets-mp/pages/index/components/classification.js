// pages/index/components/classification.js
import {
  getPetsCate
} from '../../../http/index.js'
import {
  resCode
} from '../../../utils/code.js'
Component({

  /**
   * 页面的初始数据
   */
  data: {
    srcList: [{
        img: '/static/images/8.jpg',
        cid: '0',
        name: '狗'
      },
      {
        img: '/static/images/8.jpg',
        cid: '1',
        name: '猫'
      },
      {
        img: '/static/images/8.jpg',
        cid: '2',
        name: '兔子'
      },
      {
        img: '/static/images/8.jpg',
        cid: '3',
        name: '鼠'
      }
    ]
  },
})