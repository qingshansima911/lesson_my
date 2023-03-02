<script setup>
import { reactive, onMounted } from 'vue'
import { getGoods } from './service/goods'
import GoodsItem from './components/GoodsItem.vue'

const heights = [0, 0]; // 两列的高度, 动态修改
const state = reactive({
    allGoods: [],
    leftGoods: [],
    rightGoods: []
})

const getMinHeight = () => {
    let minHeight = Math.min(...heights);
    return heights.indexOf(minHeight);
}

onMounted(async () => {
    const data = await getGoods();
    // console.log(data);
    state.allGoods = data
    let leftTemGoods = [], rightTemGoods = [];
    for (let i = 0; i < data.length; i++){
        let minHeightIndex = getMinHeight()
        if (minHeightIndex == 0) {
            leftTemGoods.push(data[i])
        } else {
            rightTemGoods.push(data[i])
        }
        heights[minHeightIndex] += data[i].height
    }
    // console.log(leftTemGoods,rightTemGoods);
    state.leftGoods = leftTemGoods;
    state.rightGoods = rightTemGoods
})

</script>

<template>
    <div class="page">
        <header></header>
        <main class="wrapper">
            <div class="col">
                <goodsItem 
                    :key="item.id"
                    v-for="item in state.leftGoods" 
                    :goods="item"/>
            </div>
            <div class="col">
                <goodsItem 
                    :key="item.id"
                    v-for="item in state.rightGoods" 
                    :goods="item"/>
            </div>
        </main>
        <footer></footer>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
}

.page {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

header,
footer {
    height: 2.346667rem;
}

main {
    flex: 1;
    padding: 0 .26666rem;
    display: flex;
    justify-content: space-between;
    overflow-y: scroll;
}

.col {
    height: 100%;
    width: 48%;
}
</style>
