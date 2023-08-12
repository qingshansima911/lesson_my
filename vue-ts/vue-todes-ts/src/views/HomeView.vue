<template>
  <div>
    <!-- html5 语义化 -->
    <main>
      <h1>Todos</h1>
      <form class="addForm" @submit.prevent="addTodo">
        <label for="add">Add todo</label>
        <div class="sl">
          <input type="text" name="add" id="add" v-model="currentTodoInp">
          <button type="submit">Add</button>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '../store/todos'
import { useProductsStore } from '../store/products'
import { ref } from 'vue';

let currentTodoInp = ref('')
const todoStore = useTodoStore()
// const productsStore = useProductsStore()
todoStore.initFromLocalStorage() // 从localStorage 拿出来并更新到store 中 
const addTodo = () => {
  const text = currentTodoInp.value
  currentTodoInp.value = ''
  if (text.trim() !== '') { // 必须输入值,不能只是空格
    todoStore.addTodo(text)
  }
}

// todoStore.addTodo('十天后面试')
// productsStore.fetchAll()
</script>

<style lang="stylus" scoped>

</style>