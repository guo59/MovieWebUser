<template>
  <div class="mine">
    <div class="name">用户名：{{userInfo.name}}</div>
    <div class="time">注册时间：{{userInfo.createTime}}</div>
  </div>
</template>

<script>
import { getUser} from '../../network/user'

export default {
  components: {},
  data () {
    return {
      userInfo: {}
    }
  },
  created() {
    this._getDetail()
  },
  methods: {
    _getDetail() {
      getUser(this.$route.params.userId).then(res => {
        this.userInfo = res.data
      })
    }
  }
}
</script>

<style type="text/css" scoped>
.mine {
  font-size: 23px;
  padding: 10px;
}
.name {
  margin: 10px 0;
}
</style>
