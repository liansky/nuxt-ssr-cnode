<template>
  <div>
    <h3 class="title">发个贴测试一下</h3>
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

  </div>
</template>

<script>
  import { fetch } from '../plugins/axios'
  import api from '../config/api-conf'

  export default {
    name: 'Creat',

    data () {
      return {
        topic_id: '',
        title: '',
        content: ''
      }
    },

    computed: {
      accesstoken () {
        return this.$store.state.user.token
      }
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

  .title {
    background-color: #258eff;
    color: #fff;
    line-height: 100px;
    font-size: 32px;
    text-align: center;
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
    line-height: 88px;
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
