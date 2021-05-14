<template>
  <div class="register">
    <div class="title">注册账号</div>
    <el-row type='flex' justify='center'>
      <el-form ref='loginForm' :model='user' :rules='rules' status-icon label-width='80px'>
        <el-form-item label='用户名' prop='name'>
          <el-input v-model="user.name"/>
        </el-form-item>
        <el-form-item label='密码' prop='pwd'>
          <el-input v-model="user.pwd" type='password'/>
        </el-form-item>
        <el-form-item label='确认密码' prop='pwdRepeat'>
          <el-input v-model="user.pwdRepeat" type='password'/>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button type='success' icon='el-icon-upload' @click="checkSubmit('loginForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import { register} from '../../network/user'

export default {
  components: {},
  data () {
    return {
      user: {},
      rules: {
        name: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        pwd: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ],
        pwdRepeat: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ]
      },
    }
  },
  methods: {
    checkSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.user.pwd != this.user.pwdRepeat) {
            this.$message({
              message: '两次密码不一致！',
              type: 'warning'
            })
          } else {
            register(this.user.name, this.user.pwd).then(res => {
              console.log(res);
              this.$message({
                message: '注册成功！请登录',
                type: 'success'
              })
              this.$router.push('/login')
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style type="text/css" scoped>
.register {
  margin: 20px auto;
}
.title {
  font-size: 26px;
  text-align: center;
  margin-bottom: 20px;
}
.el-button {
  margin-left: -80px;
}
</style>
