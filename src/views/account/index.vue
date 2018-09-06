<template>
  <div class="account-container">
    bg
    <div class="router-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {}
</script>

<style scoped lang='scss' rel='stylesheet/scss'>
  .account-container {
    min-height: 100%;
    background-color: #fafafa;
    .router-container {
      width: 400px;
      height: 600px;
      border: 1px solid #ccc;
      margin: 80px auto;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    }
  }
</style>
