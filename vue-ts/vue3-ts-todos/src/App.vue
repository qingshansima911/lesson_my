<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue';
// "paths":{
//         "@/*":[
//             "./src/*"
//         ]
//     }
import { Todo } from '@/types/todo'
import Header from '@/components/Header.vue'
import List from '@/components/List.vue'
import { saveTods } from '@/utils/storage'

const state = reactive<{ todos: Todo[] }>({
    todos: []
})
const addTodo = (todo: Todo) => {
    state.todos.unshift(todo)
}
const deleteTodo = (index: number) => {
    state.todos.splice(index, 1)
}
const updateTodo = (todo: Todo, isCompleted: boolean) => {
    todo.isCompleted = isCompleted
}
// 状态监听
watch(() => state.todos, saveTods, { deep: true })
</script>

<template>
    <div class="todo-container">
        <h1>TodoList</h1>
        <div class="todo-wrap">
            <Header :addTodo="addTodo"></Header>
            <List :todos="state.todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
        </div>
    </div>
</template>

<style scoped>
.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
