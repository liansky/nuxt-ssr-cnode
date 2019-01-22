<template>
  <div
    class="float-add"
    @click="onClick"
  >+</div>
</template>

<script>
  export default {
    name: 'FloatAdd',
    methods: {
      onClick () {
        this.$emit('click')
      }
    }
  }
</script>

<style scoped lang="scss">
  .float-add {
    width: 100px;
    height: 100px;
    background-color: #258eff;
    position: fixed;
    bottom: 80px;
    right: 60px;
    border-radius: 50%;
    line-height: 100px;
    color: #fff;
    text-align: center;
    font-size: 48px;
    font-weight: bold;
  }
</style>
