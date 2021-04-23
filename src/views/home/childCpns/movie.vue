<template>
  <div class="movie">
    <div class="title">热门电影</div>
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
import { getMovies} from '../../../network/movie'

export default {
  components: {},
  data () {
    return {
      movieList: []
    }
  },
  created() {
    this._getMovies()
  },
  methods: {
    _getMovies() {
      getMovies().then(res => {
        console.log(res);
        this.movieList = res.data
      })
    },
    showMovie(item) {
      this.$router.push(`/moviedetail/${item.id}`)
    }
  }
}
</script>

<style type="text/css" scoped>
.movie {
  margin-top: 30px;
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
  font-size: 20px;
  width: 19%;
  padding-top: 50px;
}
.poster {
  height: 241px;
  overflow: hidden;
}
img {
  width: 170px;
}
.name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
}
</style>
