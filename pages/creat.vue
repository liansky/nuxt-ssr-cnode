<template>
  <div class="wrap">
    <input
      v-model="title"
      type="text"
      placeholder="请输入标题"
      class="input"
    >
    <textarea
      v-model="content"
      class="textarea"
      cols="7"
      rows="10"
      placeholder="输入内容"
    />

    <button
      class="btn"
      type="button"
      @click="creatTopics"
    >提交</button>
    <p>topic_id: {{ topic_id }}</p>
  </div>
</template>

<script>
  import { fetch } from '../plugins/axios'
  import api from '../config/api-conf'

  export default {
    name: 'Creat',

    data () {
      return {
        accesstoken: '',
        topic_id: '',
        title: '',
        content: ''
      }
    },

    asyncData ({ app, store }) {
      let accesstoken = app.$cookies.get('token') || 'b5c58ba4-cfa8-4cf4-b0da-81237b02d278'
      store.dispatch('user/setToken', accesstoken)
      return { accesstoken }
    },

    methods: {
      creatTopics () {
        fetch(api.appHost + '/api/v1/topics', {
          data: {
            accesstoken: this.accesstoken,
            tab: 'dev',
            content: this.content,
            title: this.title
          }
        })
          .then((res) => {
            this.topic_id = res.topic_id
          })
          .catch((err) => {
            console.log(err.message)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    padding: 20px 30px;
    font-size: 28px;
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

  .input {
    line-height: 80px;
    background-color: #fff;
    font-size: 28px;
    display: block;
    margin-bottom: 30px;
    width: 100%;
    padding: 0 20px;
  }

  .textarea {
    display: block;
    width: 100%;
    font-size: 28px;
    margin-bottom: 20px;
    padding: 20px;
  }
</style>
