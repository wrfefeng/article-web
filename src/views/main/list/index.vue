<template>
  <div class="">
    <div v-for="val in list" :key="val.id" @click="getArticleDetail(val.id)">
      {{val.title}} + {{val.ulike}}
    </div>
    <el-button size="mini" @click="createArticle">新增文章</el-button>
  </div>
</template>

<script type='text/ecmascript-6'>
import { http } from '../../../http/http'

export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      http('list', '', 'GET')
        .then((res) => {
          console.log(res)
          this.list = res.data.results
        })
        .catch((res) => {
          this.$message({
            showClose: true,
            message: res.message,
            type: 'error'
          })
        })
    },
    // 获取文章详情
    getArticleDetail (param) {
      this.$message({
        showClose: true,
        message: `当前文章${param}`,
        type: 'info'
      })
    },
    // 新增文章
    createArticle () {
      let obj = {
        title: '新增测试',
        content: '123'
      }
      http('article', obj, 'POST')
        .then((res) => {
          this.$message({
            showClose: true,
            message: '文章插入成功',
            type: 'success'
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
</style>
