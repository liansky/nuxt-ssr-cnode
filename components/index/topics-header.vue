<template>
  <div class="header">
    <div class="avatar">
      <img :src="userInfo.avatar_url">
      <div class="title">
        <p>{{ userInfo.githubUsername }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopicsHeader',
    props: {
      userInfo: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    height: 100px;
    background-color: #258eff;
    display: flex;
    align-items: center;
    padding: 0 20px;
    position: fixed;
    left: 0;
    top:0;
    right: 0;

    .avatar {
      display: flex;
      align-items: center;
      color: #fff;
      img {
        margin-right: 10px;
        width: 70px;
      }
    }

    .title {
      color: #ffff;
      flex: 1;
      font-size: 32px;
    }
  }
</style>
