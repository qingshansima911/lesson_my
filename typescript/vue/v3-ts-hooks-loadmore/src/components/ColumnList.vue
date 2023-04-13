<template>
    <div class="row">
        <div :key="column._id" v-for="column in columnList" class="col-4 mb-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                    <h5 class="card-title">{{ column.title }}</h5>
                    <p class="card-text text-left">{{ column.description }}</p>
                    <router-link :to="`/column/${column._id}`" 
                    class="btn btn-outline-primary">
                        进入专栏
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ColumnProps } from '../types'
import { computed } from 'vue';
import { addColumnAvatar } from '../utils'

interface Props {
    list: ColumnProps[]
}
const props = withDefaults(defineProps<Props>(), {
    list: () => []
})
const columnList = computed(() => {
    return props.list.map(column => {
        addColumnAvatar(column, 50, 50)
        return column
    })
})
</script>

<style scoped>
.card-body img{
    width: 50px;
    height: 50px
}
</style>