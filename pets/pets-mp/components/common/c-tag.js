// components/common/c-tag.js
Component({
  /**
   * 组件的属性列表
   */
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

  /**
   * 组件的方法列表
   */
  methods: {
    tagClick() {
      this.$emit('click', this.label)
    }
  }
})
