/*
 * @Author: houpai 
 * @Date: 2019-11-15 11:32:17 
 * @Last Modified by: houpai
 * @Last Modified time: 2019-11-15 17:08:45
 */
<template>
  <div class="hello_page">
    <ul>
      <li v-for="(todo,index) in todos" :key="index">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <el-button @click="remove({todo})">完成</el-button>
      </li>
      <li>
        <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      msg: "hello world"
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos.list;
    }
  },
  methods: {
    addTodo(e) {
      if (e.target.value) {
        this.$store.commit("todos/add", e.target.value);
        e.target.value = "";
      } else {
        return false;
      }
    },
    ...mapMutations({
      toggle: "todos/toggle",
      remove: "todos/remove"
    })
  },
  mounted() {
    // 加载nuxt的loading
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  }
};
</script>

<style lang="less" scoped>
.hello_page {
  /deep/ .el-button {
    margin: 8px auto;
  }
  background-color: @bodyColor;
  color: #fff;
  .button_box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>