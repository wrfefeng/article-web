<template>
  <div class="hello">
    <el-button type="primary" size="mini">测试element</el-button>
    <button @click="testHttp">测试接口</button>
  </div>
</template>

<script>
import { http } from '../http/http'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.testHttp()
  },
  methods: {
    testHttp () {
      console.log(123)
      http('/regist', {name: '王瑞峰'}, 'POST', 5)
        .then((res) => {
          console.log(res)
        })
        .catch((res) => {
          console.log(res)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
