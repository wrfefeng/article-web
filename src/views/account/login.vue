<template>
  <div class="login-container">
      <div class="username">
        <el-input placeholder="请输入账号" v-model="userInfo.username"></el-input>
      </div>
    <div class="password">
      <el-input placeholder="请输入密码" v-model="userInfo.password" type="password"></el-input>
    </div>
    <div>
      <el-button class="login-btn" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import { http } from '../../http/http'

export default {
  data () {
    return {
      userInfo: {
        username: '',
        password: ''
      }
    }
  },
  created () {},
  methods: {
    // 登录
    login () {
      http('login', 'userInfo', 'POST')
        .then((res) => {
          this.$router.push({
            path: '/list'
          })
        })
        .catch((res) => {
          this.$message({
            showClose: true,
            message: res.message,
            type: 'error'
          })
        })
    }
  }
}
</script>

<style scoped lang='scss' rel='stylesheet/scss'>
  @import url('../../style/index.scss');
  .login-container {
    padding: 20px;
    .username, .password {
      margin-bottom: 20px;
    }
    .login-btn {
      width: 100%;
    }
  }
</style>
