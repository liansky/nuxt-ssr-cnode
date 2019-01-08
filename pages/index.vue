<template>
  <section class="container">
    <Logo/>
    <p class="name">
      {{ name }}
    </p>
  </section>
</template>

<script>
  import Logo from '../components/Logo.vue'

  export default {
    data () {
      return {
        name: 'vue'
      }
    },
    components: {
      Logo
    }
  }
</script>

<style lang="scss">

.container {
  text-align: center;
  .name {
    color: red;
  }
}
</style>
