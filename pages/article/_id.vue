<template>
  <div>文章ID：{{ $route.params.id }}</div>
</template>

<script>
  import { fetch } from '../../plugins/axios'

  export default {
    name: 'ArticleId',

    data () {
      return {
        name: 'lhg',
        age: '30'
      }
    },

    validate ({ params }) {
      // 必须是number类型
      return /^\d+$/.test(params.id)
    },

    fetch () {
      console.log('fetch')
    },

    asyncData () {
      console.log('asyncData')
    },

    beforeCreate () {
      console.log('beforeCreate')
    },

    async created () {
      console.log('created')
    },

    async mounted () {
      const data = await fetch('/api/v1/topics', {
        type: 'get',
        params: {
          page: 1,
          tab: 'ask',
          limit: 1
        }
      })
      console.log(data)
      console.log('mounted')
    }
  }
</script>

<style scoped>
</style>
