<template>
  <div>
    <transition
      v-if="loading.type === 'wk'"
      name="scale"
    >
      <div
        v-show="show"
        :class="{layer: loading.layer}"
        class="loading-view"
      >
        <div class="loading-box">
          <div class="loading-imgs">
            <img
              src="./img/img-circle.png"
              class="img-circle"
            >
            <img
              src="./img/img-inner.png"
              class="img-inner"
            >
          </div>
          <div class="loading-message">{{ loading.text }}</div>
        </div>
      </div>
    </transition>

    <div
      v-if="loading.type === 'custody'"
      v-show="show"
      :class="{layer: loading.layer}"
      class="loading-view"
    >
      <div class="loading-box-custody">
        <div class="loading-message-custody">正在跳转至华夏银行</div>
        <div class="loading-logo-custody">
          <img
            class="logo-ph"
            src="./img/puhui.png"
          >
          <img
            class="jump"
            src="./img/jump.gif"
          >
          <img
            class="logo-hx"
            src="./img/huaxia.png"
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /**
   *  @desc Loading
   *  调用方式：
   *  显示：this.$loading.show({})
   *  隐藏：this.$loading.hide({})
   *  @param type loading类型，default = wk；存管：custody
   *  @param layer 背景遮罩 default = false
   *  @param text loading文字，default = 正在加载中...
   */
  export default {
    name: 'Loading',

    data () {
      return {
        loading: {
          text: '正在加载中...',
          layer: false,
          type: 'wk' // 默认悟空猴头loading: wk;  存管loading: custody
        },
        show: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .loading-view {
    position: fixed;
    top:0;
    width: 100%;
    height: 100%;
    z-index: 9000;
  }

  .loading-box {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 236px;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .7);
    border-radius: .12rem;
    padding: .24rem 0;
  }

  .loading-box-custody {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 85%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: .2rem;
    padding: .6rem .4rem .69rem .4rem;
  }

  .loading-imgs {
    position: relative;
    display: block;
    height: .78rem;
    width: .78rem;
    margin: 0 auto .18rem;

    img {
      position: absolute;
      top: 0;
      left: 0;
      height: .78rem;
      width: .78rem;
    }
    .img-circle {
      animation: rotate 0.75s 0s linear infinite;
    }
  }

  .loading-message-custody {
    color: #333;
    font-size: .32rem;
    text-align: center;
    margin-bottom: .5rem;
    line-height: .45rem;
  }

  .loading-logo-custody {
    display: flex;
    justify-content: center;
    align-items: center;

    .logo-ph {
      height: .42rem;
    }

    .jump {
      height: .2rem;
      padding: 0 .35rem;
    }

    .logo-hx {
      height: .39rem;
    }
  }

  .loading-message {
    color: #fff;
    font-size: .24rem;
    text-align: center;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .scale-leave-active {
    animation: scale .35s ease-in;
  }

  @keyframes scale {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    35%{
      opacity: .5;
    }
    70% {
      opacity: 0;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
  .layer{
    background-color: rgba(0, 0, 0, .4);
  }
</style>
