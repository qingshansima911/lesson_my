<template>
  <Header :title="searchTitle" left-arrow @click-left="onClickLeft" />

  <div class="goods-wrap">
    <div class="goods-list">
      <div class="goods-item" @click="gotoDetail(item)" v-for="item in state.goodsList" :key="item.id">
        <img :src="item.imgUrl" alt="">
        <div class="content">
          <div class="name">{{ item.name }}</div>
          <div class="desc">
            <span class="price">￥{{ item.price }}</span>
            <span class="min">{{ item.min }}个起批</span>
          </div>
          <div class="shop">{{ item.shop }}</div>
          <div class="address">{{ item.address }}</div>
        </div>
      </div>
    </div>

    <div class="goods-list">
      <div class="goods-item" @click="gotoDetail(item)" v-for="item in state.goodsList1" :key="item.id">
        <img :src="item.imgUrl" alt="">
        <div class="content">
          <div class="name">{{ item.name }}</div>
          <div class="desc">
            <span class="price">￥{{ item.price }}</span>
            <span class="min">{{ item.min }}个起批</span>
          </div>
          <div class="shop">{{ item.shop }}</div>
          <div class="address">{{ item.address }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import axios from '@/api/axios';
import { reactive, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useGoodsStore from '@/store/goods.js'

const store = useGoodsStore()
const searchTitle = ref('')
const router = useRouter()
const route = useRoute()
searchTitle.value = route.query.name;

const onClickLeft = () => {
  window.history.back();
}

const state = reactive({
  goodsList: [],
  goodsList1: []
})
onMounted(async () => {
  const { data } = await axios.post(`/goodsFind/${route.query.name}`)
  state.goodsList = data[0]
  state.goodsList1 = data[1]
})

const gotoDetail = (item) => {
  // console.log(item.typeId);
  store.state.id = item.typeId
  router.push({ path: `/product/${item.id}` })
}
</script>

<style lang="less" scoped>
.goods-wrap {
  display: flex;
  background: #f1f1f1;
  border-radius: 5%;
  margin-top: 5px;

  .goods-list {
    display: flex;
    flex: 1;
    flex-direction: column;
    border-radius: 5%;
    width: 45%;
    height: 45%;
    margin: 0 2.5px;

    .goods-item {
      background: #ffffff;
      margin-bottom: 5px;
      border-radius: 5%;
      overflow: hidden;

      img {
        border-radius: 5%;
        max-width: 100%;
      }

      .content {
        margin: 0 10px;

        .name {
          color: #000000;
          font-size: 12px;
          font-weight: 500;
          // white-space: nowrap;
          overflow: hidden;
        }

        .desc {
          .price {
            color: #ff0000;
            font-size: 15px;
          }

          .min {
            color: #858585;
            font-size: xx-small;
            margin-left: 5px;
          }
        }

        .shop,
        .address {
          color: #858585;
          font-size: xx-small;
          white-space: nowrap;
          overflow: hidden;
        }
      }

    }
  }
}
</style>