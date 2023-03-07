<template>
    <div class="recommend">
        s
        <Banners v-if="banners.length" :banners="banners"></Banners>
    </div>
</template>

<script setup lang="ts">
import { useRecommendStore } from '@/store/recommend';
import { onMounted, computed } from 'vue';
import Banners from '~/banners/Index.vue'

const recommendStore = useRecommendStore()
const banners = computed(() => recommendStore.banners)

onMounted(async () => {
    const bannersData = await recommendStore.getBannersData()
    // console.log(bannersData);
    
})
</script>

<style scoped>

</style>