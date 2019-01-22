<template>
  <article class="wrap">
    <TopicsHeader
      :userInfo="userInfo"
    />
    <TopicsNav :topicType.sync="topicType"/>
    <div class="topics-list">
      <TopicsItem
        v-for="topic in topics[topicType]"
        :key="topic.id"
        :topic="topic"
      />
    </div>
    <FloatAdd @click="creatTopics"/>
  </article>
</template>

<script>

  import TopicsHeader from '../components/index/topics-header.vue'
  import TopicsNav from '../components/index/topics-nav.vue'
  import TopicsItem from '../components/index/topics-item.vue'
  import FloatAdd from '../components/index/float-add.vue'

  export default {
    name: 'Index',

    data () {
      return {
        topicType: 'share'
      }
    },
    components: {
      FloatAdd,
      TopicsItem,
      TopicsNav,
      TopicsHeader
    },

    computed: {
      userInfo () {
        return this.$store.state.user.userInfo
      },

      topics () {
        return this.$store.state.topics
      }
    },

    watch: {
      topicType (val) {
        if (this.topics[val] && this.topics[val].length === 0) {
          this.fetchTopics()
        }
      }
    },

    fetch ({ store }) {
      return Promise.all([
        store.dispatch('user/fetchUserInfo'),
        store.dispatch('topics/fetchTopics', {
          page: 1,
          tab: 'share',
          limit: 10,
          mdrender: false
        })
      ])
    },

    methods: {
      creatTopics () {
        this.$router.push('/creat')
      },

      fetchTopics () {
        this.$store.dispatch('topics/fetchTopics', {
          page: 1,
          tab: this.topicType,
          limit: 10,
          mdrender: false
        })
      }
    }
  }
</script>

<style lang="scss">
  .topics-list {
    padding-bottom: 40px;
    position: fixed;
    top: 188px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
</style>
