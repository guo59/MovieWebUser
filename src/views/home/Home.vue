<template>
  <div>
    <top-box />
    <top-banner @search="search" @searchType="searchType" />
    <movie
      :movieList="movieList"
      :title="title"
      :isShowBack="showSearch"
      @backHome="backHome"
    />
  </div>
</template>

<script>
import TopBox from "../../components/TopBox";
import TopBanner from "../../components/TopBanner";
import Movie from "./childCpns/movie";

import { getMovies, getMovieByType } from "../../network/movie";

export default {
  components: {
    TopBox,
    TopBanner,
    Movie,
  },
  data() {
    return {
      movieList: [],
      showSearch: false,
    };
  },
  computed: {
    title() {
      if (this.showSearch) {
        return "动作";
      } else {
        return "热门电影";
      }
    },
  },
  created() {
    this._getMovies();
  },
  methods: {
    _getMovies() {
      getMovies().then((res) => {
        console.log(res);
        this.movieList = res.data;
      });
    },
    search(content) {
      getMovies(content).then((res) => {
        this.movieList = res.data;
        if (content.length > 0) {
          this.showSearch = true;
        } else {
          this.showSearch = false;
        }
      });
    },
    searchType(item) {
      getMovieByType(item).then((res) => {
        console.log(res);
        this.movieList = res.data;
        this.showSearch = true;
      });
    },
    backHome() {
      this._getMovies();
    },
  },
};
</script>

<style type="text/css" scoped>
</style>
