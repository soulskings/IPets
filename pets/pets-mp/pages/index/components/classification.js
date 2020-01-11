// pages/index/components/classification.js
import {
  getPetsCate
} from '../../../http/index.js'
import {
  resCode
} from '../../../utils/code.js'
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 页面的初始数据
   */
  data: {
    srcList: [{
        img: '/images/8.jpg',
        cid: '0',
        name: '狗'
      },
      {
        img: '/images/8.jpg',
        cid: '1',
        name: '猫'
      },
      {
        img: '/images/8.jpg',
        cid: '2',
        name: '兔子'
      },
      {
        img: '/images/8.jpg',
        cid: '3',
        name: '鼠'
      }
    ]
  },
})