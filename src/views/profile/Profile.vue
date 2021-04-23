<template>
  <div>
    <top-box/>
    <div class="nav-bar" @click="backToIndex">
      <<返回首页
    </div>
    <el-container>
      <el-aside width='200px'>
        <el-menu :default-openeds="['1', '2']"
                 :default-active='$router.path'
                 router>
          <el-submenu index='1'>
            <template slot="title"><i class="el-icon-user"></i>个人中心</template>
            <el-menu-item :index='mine'>
              我的信息
            </el-menu-item>
            <el-menu-item :index='comment'>
              我的评论
            </el-menu-item>
          </el-submenu>
          <el-submenu index='2'>
            <template slot="title"><i class="el-icon-s-custom"></i>修改信息</template>
            <el-menu-item :index='editname'>
              修改用户名和密码
            </el-menu-item>
          </el-submenu>          
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TopBox from '../../components/TopBox'

export default {
  components: {
    TopBox
  },
  data () {
    return {

    }
  },
  computed: {
    mine() {
      return '/profile/' + this.$route.params.userId + '/mine'
    },
    editname() {
      return '/profile/' + this.$route.params.userId + '/editname'
    },
    comment() {
      return '/profile/' + this.$route.params.userId + '/comment'
    }
  },
  methods: {
    backToIndex() {
      this.$router.replace(`/home/${this.$route.params.userId}`)
    }
  }
}
</script>

<style type="text/css" scoped>
.nav-bar {
  background-color: #f0f3f5;
  font-size: 24px;
  padding: 10px;
}
</style>
