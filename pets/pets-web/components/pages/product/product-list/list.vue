<template>
  <ul>
    <li 
      v-for="(item, index) in listData" 
      :key="index"
    >111111111</li>
  </ul>
</template>

<script>
  // 列表组件
  export default {
    name: 'List',
    data () {
      return {
        listData: [1, 2, 3, 4, 5, 6, 7, 8]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
