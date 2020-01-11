/*
 * @Descripttion: 
 * @version: 
 * @Author: wupeng
 * @Date: 2020-01-10 11:16:26
 * @LastEditors  : wupeng
 * @LastEditTime : 2020-01-10 16:45:18
 */
// components/common/c-tag.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses:['tag-expand'],
  properties: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: '标签'
    },
    setStyle: {
      type: Object,
      default: () => {
        return {
          bgColor: {
            type: String,
            default: ''
          },
          color: {
            type: String,
            default: ''
          }
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
})
