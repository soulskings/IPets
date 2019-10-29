<template>
  <div class="nb-toast-main">
    <div
      v-if="visible"
      class="bg"
    ></div>
    <transition
      name="fade"
    >
      <div
        v-show="visible"
        class="nb-toast"
        :class="[customClass,icon !== '' ? theme : '']"
        :style="{ 'padding': icon !== '' ? '0.53rem 0.42rem 0.44rem 0.42rem' : '' }"
      >
        <i
          v-if="icon !== ''"
          :style="{ 'margin-bottom': icon === '' ? '0' : '0.32rem' }"
          :class="iconClass"
          class="nb-toast-icon"
        ></i>
        <span
          :class="icon === '' ? [theme, 'nb-toast-span'] : ''"
          class="nb-toast-text"
          v-html="message"
        >
        </span>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        visible: false
      }
    },

    props: {
      message: {
        type: String,
        default: null
      },

      className: {
        type: String,
        default: ''
      },

      position: {
        type: String,
        default: 'middle'
      },

      icon: {
        type: String,
        default: ''
      },

      theme: {
        type: String,
        default: 'black'
      }
    },

    computed: {
      customClass () {
        const classes = []
        switch (this.position) {
        case 'top':
          classes.push('is-placetop')
          break
        case 'bottom':
          classes.push('is-placebottom')
          break
        default:
          classes.push('is-placemiddle')
        }
        classes.push(this.className)

        return classes.join(' ')
      },
      iconClass () {
        const classes = ['iconfont']
        switch (this.icon) {
        case 'success':
          classes.push('icon-pay-for-success')
          break
        case 'fail':
          classes.push('icon-pay-for-failure')
          break
        case 'prompt':
          classes.push('icon-prompt')
          break
        case 'warning':
          classes.push('icon-warning')
          break
        case 'error':
          classes.push('icon-close')
          break
        }
        classes.push(this.className)

        return classes.join(' ')
      }
    }
  }
</script>


<style scoped lang="scss">
  .nb-toast{
    position: fixed;
    min-width: 80%;
    border-radius: 16px;
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 100000;
    transform: translate(-50%,-50%) scale(1);
  }
  .bg{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 100001;
  }
  .nb-toast-icon {
    display: block;
    text-align: center;
    font-size: 1rem;
    height: 1rem;
    line-height: 1rem;
    color: #fff;
  }

  .icon-error{
    background: url("~@/assets/img/icon/error_icon.jpg") no-repeat;
    width: .3rem;
    height: .3rem;
    display: inline-block;
    float: left;
    margin-right: .1rem;
    background-size: 100% 100%;
    margin-top: .04rem;
  }

  .nb-toast-text {
    font-size: 28px;
    text-align: center;
  }

  .nb-toast-span{
    padding: 20px 50px;
    border-radius: 16px;
    display: inline-block;
  }

  .nb-toast-pop-enter, .nb-toast-pop-leave-active {
    opacity: 0;
  }
  .black{
    background: rgba(0, 0, 0, 0.7);
  }
  .is-placetop {
    top: 1rem;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .is-placemiddle {
    left: 50%;
    top: 50%;
  }

  .is-placebottom {
    bottom: 1rem;
    left: 50%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: transform .3s;
  }
  .fade-enter, .fade-leave-active {
    transform:translate(-50%,-50%) scale(0);
  }

</style>
