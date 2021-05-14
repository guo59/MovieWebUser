<template>
  <el-row type='flex' justify='center'>
    <el-form ref='loginForm' :model='user' :rules='rules' status-icon label-width='80px'>
      <el-form-item label='用户名' prop='name'>
        <el-input v-model="user.name"/>
      </el-form-item>
      <el-form-item label='密码' prop='pwd'>
        <el-input v-model="user.pwd" type='password'/>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type='success' icon='el-icon-upload' @click="_login">登录</el-button>
      </el-form-item>
      <el-form-item style="text-align: center">
        <a @click="register">还未有账号？点击注册</a>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
import { login} from '../../../network/user'

export default {
  data () {
    return {
      rules: {
        name: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        pwd: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ]
      },
      user: {}
    }
  },
  methods: {
    _login() {
      login(this.user.name, this.user.pwd).then(res => {
        this.$store.commit('userId', res.data.id)
        this.$router.replace(`/home/${res.data.id}`)
        this.$message({
          message: `欢迎你，${this.user.name}`,
          type: 'success'
        })
      }).catch(err => {
        this.$message({
          message: err.response.data,
          type: 'error'
        })
      })
    },
    register() {
      this.$router.push('/register')
    }
  }
}
</script>

<style type="text/css" scoped>
a {
  cursor: pointer;
  color: #007722;
}
</style>
