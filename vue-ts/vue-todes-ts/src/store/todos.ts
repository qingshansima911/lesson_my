import { ref, Ref } from 'vue'
import { defineStore } from 'pinia';
import { nanoid } from 'nanoid'
// 某个模块的状态函数化 告别类式编程
// 持久化 localStorage
type Todo = {
    id: string;
    text: string 
    isComplete: boolean
} // 自定义类型

const lsKey = '_v_todos'

export const useTodoStore = defineStore('todos', () => {
    // 泛型
    const todos :Ref<Todo[]> = ref([]) // 每一项的类型
    const addTodo = (text:string) => {
        todos.value = [
            ...todos.value,
            {
                id: nanoid(), // 生成唯一的ID
                isComplete: false, // 未完成
                text // 文本的内容
            }
        ]
        updateLocalStorage()
    }

    const updateLocalStorage = () => {
        localStorage.setItem(lsKey,JSON.stringify(todos.value))
    }
    const initFromLocalStorage = () => {
        const lstodos = localStorage.getItem(lsKey)
        if (lstodos === null) {
            todos.value = []
        } else {
            todos.value = JSON.parse(lstodos)
        }
    }
    return {
        todos,
        addTodo,
        initFromLocalStorage
    }
})