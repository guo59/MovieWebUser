<template>
  <div>
    <top-box/>
    <top-banner/>
    <movie/>
  </div>
</template>

<script>
import TopBox from '../../components/TopBox'
import TopBanner from '../../components/TopBanner'
import Movie from './childCpns/movie'

export default {
  components: {
    TopBox,
    TopBanner,
    Movie
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style type="text/css" scoped>
</style>
