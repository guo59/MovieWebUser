<template>
  <div>
    <top-box/>
    <top-banner/>
    <div class="back" @click="backToHome">返回首页></div>
    <div class="movie-info">
      <div class="name">{{movieInfo.name}}</div>
      <div class="main-info">
        <img :src="`http://${movieInfo.poster_url}`" alt="">
        <div class="text-info">
          <div>导演：{{movieInfo.director}}</div>
          <div>类型：{{movieInfo.type}}</div>
          <div>上映日期：{{movieInfo.releasedate}}</div>
        </div>
      </div>
      <div class="intro">
        <span class="intro-title">{{movieInfo.name}}的剧情简介：</span>
        <div class="intro-text">{{movieInfo.introduction}}</div>
      </div>
    </div>
    <div class="comment">
      <span class="comment-title">{{movieInfo.name}}的短评：</span>
      <div class="addComment">
        <el-input
          type="textarea"
          :rows="3"
          placeholder="我也来说一句……"
          v-model="textarea">
        </el-input>
        <el-button type="success" @click="postComment">添加评论</el-button>
      </div>
      <div v-for="(item, index) in comments" :key="index" class="comment-item">
        <div class="user-info">
          <span>{{item.name}}</span>
          <span>{{item.createTime}}</span>
        </div>
        <div class="content">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBox from '../../components/TopBox'
import TopBanner from '../../components/TopBanner.vue'
import { getMovieById, getMovieComment} from '../../network/movie'

export default {
  components: {
    TopBox,
    TopBanner
  },
  data () {
    return {
      movieInfo: {},
      comments: [],
      textarea: ''
    }
  },
  created() {
    getMovieById(this.$route.params.movieId).then(res => {
      this.movieInfo = res.data
    })
    getMovieComment(this.$route.params.movieId).then(res => {
      this.comments = res.data
    })
  },
  methods: {
    backToHome() {
      this.$router.go(-1)
    },
    postComment() {
      this.$message({
        message: '发表评论成功！',
        type: 'success'
      })
      this.textarea = ''
    }
  }
}
</script>

<style type="text/css" scoped>
.movie-info {
  padding: 20px;
}
.back {
  text-align: right;
  padding: 10px;
  font-size: 20px;
}
img {
  width: 300px;
  margin-right: 40px;
}
.name {
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 20px;
}
.main-info {
  display: flex;
}
.text-info {
  font-size: 22px;
  line-height: 40px;
}
.intro {
  margin: 40px 0;
}
.intro-title {
  color: #007722;
  font-size: 30px;
}
.intro-text {
  font-size: 20px;
  margin-top: 10px;
}
.comment {
  font-size: 20px;
  padding: 20px;
}
.comment-item {
  border-bottom: 1px solid #d1d1d1;
  padding: 20px 0;
}
.content {
  color: #7e7a7a;
  margin-top: 10px;
}
.comment-title {
  color: #007722;
  font-size: 30px;
}
.user-info {
  display: flex;
  justify-content: space-between;
}
.addComment {
  display: flex;
  margin: 10px 0;
}
</style>
