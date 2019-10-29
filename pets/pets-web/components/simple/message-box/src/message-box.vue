<template>
  <div class="nb-msgbox-wrapper">
    <div
      v-if="visible"
      v-show="lockState"
      class="nb-msgbox-bg"
      @click="hideLayer"
    ></div>
    <transition name="msgbox-bounce">
      <div
        v-show="visible"
        class="nb-msgbox"
      >
        <div
          v-if="title !== ''"
          class="nb-msgbox-header"
        >
          <div class="nb-msgbox-title">{{ title }}</div>
        </div>
        <div
          v-if="message !== ''"
          :style="{'padding-top': title === '' ? '.5rem' : '.24rem'}"
          class="nb-msgbox-content"
        >
          <div
            class="nb-msgbox-message"
            v-html="message"
          ></div>
        </div>
        <div class="nb-msgbox-btns">
          <button
            v-show="cancelText !== ''"
            :class="cancelClass ? `${cancelClass} nb-btn cancel` : 'nb-btn cancel'"
            type="button"
            @click="cancelHandle"
          >
            {{ cancelText }}
          </button>
          <button
            v-show="showOkBtn"
            :class="okClass ? `${okClass} nb-btn confirm` : 'nb-btn confirm'"
            type="button"
            @click="confirmHandle"
          >{{ okText }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  /**
   * 调用方式：
   * client:
   * this.$messageBox({
   *  title: '标题，默认为空',
   *  message: '内容',
   *  okClass: '确定按钮的class',
   *  cancelClass: '取消按钮的class'
   *  cancelText: '取消按钮文案',
   *  okText: '确定按钮文案',
   *  ok: () => {
   *    return '确定按钮的回调函数'
   *  },
   *  cancel: () => {
   *    return '取消按钮的回调'
   *  }
   * })
   * server:
   * app.$messageBox({})
   */
  export default {
    data () {
      return {
        title: '',
        message: '',
        showOkBtn: true,
        okText: '确定',
        cancelText: '',
        okClass: '',
        cancelClass: '',
        lockState: true,
        visible: true,
        layerClick: false,
        cancel () {},
        ok () {}
      }
    },

    mounted () {
      this.$nextTick(() => {
        document.querySelector('.nb-msgbox-bg').addEventListener('touchmove', function (event) {
          event.preventDefault()
          event.stopPropagation()
        })
      })
    },

    methods: {
      cancelHandle () {
        this.visible = false
        this.lockState = false
        setTimeout(() => {
          this.cancel && this.cancel()
        }, 200)
      },

      hideLayer () {
        if (this.layerClick) {
          this.visible = false
          this.lockState = false
        }
      },

      confirmHandle () {
        this.visible = false
        this.lockState = false
        setTimeout(() => {
          this.ok && this.ok()
        }, 200)
      }
    }
  }
</script>

<style scoped lang="scss">

  .nb-msgbox-wrapper {
    z-index: 9999;
    position: relative;
  }

  .nb-msgbox-bg {
    background-color: rgba(0, 0, 0, .5);
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
  }

  .nb-msgbox {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    background-color: #fff;
    // width: 610px;
    width: 81.33%;
    border-radius: 20px;
     -webkit-user-select: none;
    overflow: hidden;
    backface-visibility: hidden;
    transition: .3s;

    &-header {
      padding: 15px 0 0;
    }

    &-content {
      border-bottom: 1px solid #dedede;
      position: relative;
      padding: 10px 40px 40px;
    }

    &-title {
      text-align: center;
      padding-left: 0;
      margin-bottom: 0;
      font-size: 36px;
      color: #333333;
      padding-top: 20px;
      line-height: 50px;
    }

    &-message {
      text-align: center;
      font-size: 28px;
      line-height: 40px;
      color: #333333;
    }

    &-btns {
      display: flex;
      height: 100px;
      line-height: 100px;
      font-size: 32px;
      color: #1CC7B9;
    }

    &-btns .nb-btn {
      background-color: #fff;
      font-size: .32rem;
      flex: 1;
      &:focus {
        outline: none;
      }
      &:last-child {
        border: none;
      }
    }

    &-btns .cancel {
      border-right: 1px solid #dedede;
      color: #888;
    }

    &-btns .confirm {
      color: #1CC7B9;
    }
  }

  .msgbox-bounce-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }

  .msgbox-bounce-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.9);
  }
</style>
