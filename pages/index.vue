<template>
  <section class="container">
    <Logo/>
    <h3 class="title">
      {{ title }}
    </h3>
    <ul class="list">
      <li>
        <nuxt-link to="/article/1">文章1</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/article/2">文章2</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/article/3">文章3</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/creat">创建</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
  import Logo from '../components/Logo.vue'


  export default {
    name: 'Index',

    data () {
      return {
        title: 'nuxt-ssr-cnode'
      }
    },


    components: {
      Logo
    }
  }
</script>

<style lang="scss">

.container {
  .title {
    color: #333;
    font-size: .42rem;
  }
  .list {
    font-size: .28rem;
  }
}
</style>
