<template>
  <div>
    <el-form class="box" ref="ruleForm" :rules='rules' :model='user'>
      <div class="block">
        <el-form-item class="select_ed" prop='name'>
          <p>用户名</p>
          <el-input v-model="user.name" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item class="select_ed" prop='password'>
          <p>密码</p>
          <el-input v-model="user.password" placeholder="请输入密码" type='password'/>
        </el-form-item>
      </div>

      <div class="btn" style="margin-top:50px;text-align: center;">
        <el-button type="primary" @click="submit()">提交</el-button>
      </div>

    </el-form>
  </div>
</template>

<script>
import { updateUser} from '../../network/user'

export default {
  components: {},
  data () {
    return {
      user: {},
      rules: {
        name: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submit() {
      updateUser(this.$route.params.userId, this.user.name, this.user.password).then(res => {
        this.$message({
          message: '修改成功！请重新登录',
          type: 'success'
        })
        this.$router.replace('/login')
      })
    }
  }
}
</script>

<style type="text/css" scoped>
</style>
