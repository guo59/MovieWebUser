<template>
  <div class="top-bar">
    <span class="title">电影评论网站</span>
    <div class="right">
      <div @click="backToLogin">退出登录</div>
      <div class="mine" @click="toProfile">我的信息</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  methods: {
    toProfile() {
      this.$router.push(`/profile/${this.$route.params.userId}`)
    },
    backToLogin() {
      this.$router.replace('/login')
    }
  }
}
</script>

<style type="text/css" scoped>
.top-bar {
  background-color: #545652;
  width: 100%;
  height: 40px;
  color: #d5d5d5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  margin-left: 15px;
}
.mine {
  margin-right: 15px;
  margin-left: 15px;
}
.right {
  display: flex;
}
</style>
