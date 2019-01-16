<template>
  <div class="wrap">
    <button
      class="btn"
      type="button"
      @click="updateAsk"
    >修改姓名、tab</button>

    <ul class="list">
      <li>
        <div class="key">文章ID:</div>
        <div class="val">{{ $route.params.id }}</div>
      </li>
      <li :class="updateBg ? 'li-bg' : ''">
        <div class="key">姓名：</div>
        <div class="val">{{ name }}</div>
      </li>
      <li>
        <div class="key">年龄：</div>
        <div class="val">{{ age }}</div>
      </li>
      <template v-for="(value, key) in topic[1]">
        <li
          :key="key"
          :class="updateBg && key === 'tab' ? 'li-bg' : ''"
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

  export default {
    name: 'ArticleId',

    data () {
      return {
        age: '30',
        updateBg: false,
        topic: []
      }
    },

    validate ({ params }) {
      // 必须是number类型
      return /^\d+$/.test(params.id)
    },

    fetch () {
      console.log('fetch')
    },

    async asyncData () {
      const data = await fetch('https://cnodejs.org/api/v1/topics', {
        type: 'get',
        params: {
          page: 1,
          tab: 'ask',
          limit: 2
        }
      })
      console.log('asyncData')
      return { topic: data.data, name: 'lhg' }
    },

    beforeCreate () {
      console.log('beforeCreate')
    },

    async created () {
      console.log('created')
    },

    async mounted () {
      console.log('mounted')
    },

    methods: {
      updateAsk () {
        this.name = '连合国'
        this.topic[1].tab = '测试'
        this.updateBg = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    padding: 0 20px;
    font-size: 28px;
  }
  .btn {
    box-sizing: border-box;
    display: block;
    height: 80px;
    background-color: #F15B5A;
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
