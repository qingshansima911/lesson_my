<template>
    <div>
        {{ count }}
        <button @click="add">add</button>
    </div>
</template>

<script setup>
// count 来自中央 
    import { useStore } from '../store/gvuex';
    import { computed } from 'vue';

    const store = useStore(); // store 来到组件 hooks
    
    // console.log(store,'??????');
    const count = computed(() => store.state.count);

    const add = () => {
        store.commit('add');
    }

</script>

<style lang="stylus" scoped>

</style>