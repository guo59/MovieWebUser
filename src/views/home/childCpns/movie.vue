<template>
  <div class="movie">
    <div class="top">
      <div class="title">{{title}}</div>
      <div class="back" v-if="isShowBack" @click="backHome">返回首页>></div>
    </div>
    <div class="movieList">
      <div class="list-item" v-for="(item, index) in movieList" :key="index" @click="showMovie(item)">
        <div class="poster">
          <img :src="'http://' + item.poster_url"/>
        </div>
        <div class="name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      
    }
  },
  props: ['movieList', 'title', 'isShowBack'],
  methods: {
    showMovie(item) {
      this.$router.push(`/moviedetail/${item.id}`)
    },
    backHome() {
      this.$emit('backHome')
    }
  }
}
</script>

<style type="text/css" scoped>
.movie {
  margin-top: 30px;
}
.top {
  display: flex;
  justify-content: space-between;
}
.title {
  border-bottom: 1px solid #d1d1d1;
  font-size: 24px;
  padding: 5px;
}
.movieList {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}
.list-item {
  font-size: 18px;
  width: 19%;
  padding-top: 50px;
}
.poster {
  height: 210px;
  overflow: hidden;
}
img {
  width: 150px;
}
.name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
}
</style>
