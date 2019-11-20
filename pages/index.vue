<template>
  <div class="container">
    personMessage
    <p>姓名:{{ personMessage && personMessage.name }}</p>
    <p>年龄:{{ personMessage && personMessage.age }}</p>
    <p>兴趣:{{ personMessage && personMessage.interest }}</p>
    <!-- <ul class="articles_list">
      <li v-for="(item, index) in articlesList" :key="index">
        <p class="articles_title">
          <img :src="item.docurl" alt class="doctor_photo" />
          <span
            class="doctor"
            :class="[{ flexSpan: item.articletype !== 2 }]"
          >{{ item.articletype === 2 ? item.docname : "健康资讯" }}</span>
          <span
            class="hospital"
            v-if="item.articletype === 2"
          >{{ item.dochospital }} {{ item.docdepartment }}</span>
        </p>
        <p class="article_summary">{{ item.articletitle }}</p>
        <div class="article_img_box">
          <img :src="item.articlelogourl" alt />
        </div>
      </li>
    </ul>-->

    <el-button @click="$router.push({name:'users-haha',query:{id:1111}})">users-haha</el-button>
    <el-button @click="$router.push({name:'users-id',query:{id:2222}})">users-id</el-button>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // let articlesList = [];
    // $axios
    //   .get("PArticleController/selectArticle", {
    //     type: 3,
    //     searchName: "",
    //     page: 1,
    //     limit: 4
    //   })
    //   .then(res => {
    //     console.log('res====', res.data);
    //     articlesList = res.data.data;
    //   });
    // return {
    //   articlesList: articlesList
    // };
    let personMessage;
    await $axios.get("bins/b54rm").then(res => {
      console.log("data====", res.data);
      personMessage = res.data;
    });
    return {
      personMessage: personMessage
    };
  },
  data() {
    return {};
  }
  // created() {
  //   if (process.client) {
  //     console.log("lodash", window._);
  //   }
  // }
};
</script>

<style lang="less" scoped>
.container {
  color: #fff;
  font-size: 100px;
  text-align: center;
}
</style>
