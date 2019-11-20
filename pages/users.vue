<template>
  <div class="users_page">
    users_page
    <nuxt-child></nuxt-child>
    </div>
</template>

<script>

// nuxt可自动建立嵌套路由 pages下文件夹,首先新建一个对应文件夹名的一个vue文件,其余vue文件即是子路由文件
// 路由带参数 可用 _ 下划线分隔  生成的路由为:
  // {
  //   path: "/users/:id?",
  //   component: _27a28d68,
  //   name: "users-id"
  // },

export default {
  layout: 'blog',
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.users_page {
  font-size: 120px;
}
</style>