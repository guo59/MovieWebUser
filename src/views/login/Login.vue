<template>
  <el-container>
    <el-header class="header" height='100px'>
      <h3>电影评论网站</h3>
      <p>请登录</p>
    </el-header>
    <el-main>
      <login-body/>
    </el-main>
  </el-container>
</template>

<script>
import LoginBody from './childCpns/LoginBody.vue'

export default {
  components: {
    LoginBody
  },
  data () {
   return {}
  },
  methods: {}
}
</script>

<style type="text/css" scoped>
  .header{
    background-color: #007722;
    color: white;
  }
  .el-container {
    border: 1px solid #d1d1d1;
    height: 90vh;
    background-color: rgba(100, 100, 100, .2);
  }
  .el-main {
    padding-top: 80px;
  }
</style>
