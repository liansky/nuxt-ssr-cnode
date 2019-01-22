<template>
  <div class="topics-nav">
    <ul class="nav-list">
      <li
        :class="topicType === 'share' ? 'live' : ''"
        @click="updateType('share')"
      ><span>分享</span></li>
      <li
        :class="topicType === 'ask' ? 'live' : ''"
        @click="updateType('ask')"
      ><span>问答</span></li>
      <li
        :class="topicType === 'job' ? 'live' : ''"
        @click="updateType('job')"
      ><span>工作</span></li>
      <li
        :class="topicType === 'good' ? 'live' : ''"
        @click="updateType('good')"
      ><span>精选</span></li>
      <li
        :class="topicType === 'dev' ? 'live' : ''"
        @click="updateType('dev')"
      ><span>测试</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'TopicsNav',
    props: {
      topicType: {
        type: String,
        default: 'share'
      }
    },

    methods: {
      updateType (type) {
        this.$emit('update:topicType', type)
      }
    }
  }
</script>

<style scoped lang="scss">
  .topics-nav {
    .nav-list {
      display: flex;
      height: 88px;
      line-height: 88px;
      font-size: 26px;
      color: #333;
      justify-content: space-around;
      background-color: #fff;
      position: fixed;
      left: 0;
      right: 0;
      top: 100px;
      li {
        text-align: center;
        flex: 1;
        &.live {
          span {
            background-color: #258eff;
            padding: 10px 12px;
            color: #fff;
            border-radius: 10px;
          }
        }
      }
    }
  }
</style>

