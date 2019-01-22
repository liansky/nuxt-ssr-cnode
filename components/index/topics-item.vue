<template>
  <div
    class="topics-item"
    @click="onClick(topic.id)"
  >
    <div class="desc">
      <div><span class="type">{{ topic.tab }}</span></div>
      <div class="time">{{ topic.reply_count }}/{{ topic.visit_count }}</div>
    </div>
    <div class="content">
      <h3>{{ topic.title }}</h3>
      <p>{{ topic.content }}</p>
    </div>
    <div class="footer">
      <div class="name">
        <img :src="topic.author.avatar_url">
        <span>{{ topic.author.loginname }}</span>
      </div>
      <div class="at">{{ topic.create_at }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopicsItem',

    props: {
      topic: {
        type: Object,
        default: () => {}
      }
    },

    methods: {
      onClick (id) {
        this.$router.push({ path: `/article/${id}` })
      }
    }
  }
</script>

<style scoped lang="scss">
  .topics-item {
    background-color: #fff;
    margin-top: 20px;
    padding: 0 20px;

    .desc {
      display: flex;
      justify-content: space-between;
      height: 80px;
      line-height: 80px;
      border-bottom: 1px solid #ccc;
      font-size: 24px;
      color: #666;
      .type {
        padding: 5px 10px;
        background-color: #258eff;
        color: #fff;
        border-radius: 6px;
      }
    }

    .content {
      overflow: hidden;
      padding: 40px 0;
      border-bottom: 1px solid #ccc;

      h3 {
        font-size: 32px;
        line-height: 40px;
        height: 40px;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      p {
        height: 100px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }

    .footer {
      display: flex;
      height: 80px;
      justify-content: space-between;
      align-items: center;
      .name {
        img {
          margin-right: 10px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
    }
  }
</style>
