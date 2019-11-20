export const state = () => ({
    list: []
  })
  
  export const mutations = {
    add (state, text) {
      state.list.push({
        text: text,
        done: false
      })
    },
    remove (state, { todo }) {
      if(todo.done){
        state.list.splice(state.list.indexOf(todo), 1)
      }else {
        return false
      }
    },
    toggle (state, todo) {
      todo.done = !todo.done
    }
  }