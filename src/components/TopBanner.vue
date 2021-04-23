<template>
  <div class="top-banner">
    <div class="banner-top">
      <div class="title">电影评论网站</div>
      <div class="search">
        <el-input
          placeholder="搜索电影"
          prefix-icon="el-icon-search"
          v-model="searchContent">
        </el-input>
      </div>
    </div>

    <div class="type">
      <div v-for="(item, index) in types" :key='index' class="type-text">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      types: ['爱情', '剧情', '动作', '喜剧', '动画', '音乐', '历史', '战争'],
      searchContent: ''
    }
  },
  methods: {}
}
</script>

<style type="text/css" scoped>
.top-banner {
  background-color: #f0f3f5;
  height: 140px;
  width: 100%;
  color: #1c88cb;
  padding-top: 40px;
}
.banner-top {
  display: flex;
  border-bottom: 1px solid #d1d1d1;
  padding-bottom: 30px;
}
.title {
  font-weight: bold;
  font-size: 40px;
  width: 30%;
  text-align: center;
}
.search {
  flex: 1;
}
.el-input {
  width: 500px;
}
.type {
  display: flex;
  padding-left: 130px;
  font-size: 22px;
}
.type-text {
  padding: 10px 20px;
}
</style>
