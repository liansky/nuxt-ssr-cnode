<template>
  <div class="wrap">
    <h3>{{ topic.title }}</h3>
    <ul class="list">
      <template v-for="(value, key) in topic">
        <li
          :key="key"
        >
          <div class="key">{{ key }} :</div>
          <div
            class="val"
            v-html="value"
          />
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
  import { fetch } from '../../plugins/axios'
  import api from '../../api/api-conf'

  export default {
    name: 'ArticleId',

    data () {
      return {
        topic: {}
      }
    },

    fetch () {
      console.log('fetch')
    },

    async asyncData ({ params }) {
      console.log('asyncData')
      const data = await fetch(`${api.topicDetail}/${params.id}`, {
        type: 'get'
      })
      return { topic: data.data }
    },

    beforeCreate () {
      console.log('beforeCreate')
    },

    created () {
      console.log('created')
    },

    mounted () {
      console.log('mounted')
    },

    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    font-size: 28px;
    h3 {
      background-color: #fff;
      color: #333;
      line-height: 80px;
      text-align: center;
      font-size: 32px;
    }
  }
  .btn {
    box-sizing: border-box;
    display: block;
    height: 80px;
    background-color: #258eff;
    font-size: 32px;
    color: #fff;
    margin: 40px 0;
    width: 100%;
  }

  .list {
    background-color: #fff;
    padding: 20px;
    display: block;
    li {
      display: flex;
      margin-bottom: 10px;
      line-height: 50px;
      &:nth-child(odd) {
        background-color: #f4f4f4;
      }
      .key {
        max-width: 30%;
        min-width: 20%;
        text-align: left;
        padding-left: 10px;
      }
      .val {
        flex: 1;
        overflow: hidden;
      }
    }
  }

  .li-bg {
    background-color: red;
    color: #fff;
  }
</style>
