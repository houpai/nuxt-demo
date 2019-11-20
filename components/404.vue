<template>
  <div class="notFound_page">
    <span v-if="show">404</span>
    <div>
      <el-button @click="show=!show">过渡</el-button>
    </div>

    <div>
      <nuxt-link to="/todos">todos</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'user-agent',
  data() {
    return {
      show:true
    };
  },
  transition: 'test', // 设置过渡 三种类型 string function object 文档: https://zh.nuxtjs.org/api/pages-transition#string
};
</script>

<style scoped lang="less">
html,
body {
  height: 100%;
}

.notFound_page {
  height: 100%;
  font-size: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>