<template>
  <div class="goods-wrap">
    <div class="goods-list">
      <div class="goods-item" @click="gotoDetail(item)" v-for="item in state.goodsData" :key="item.id">
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
      <div class="goods-item" @click="gotoDetail(item)" v-for="item in state.goodsData1" :key="item.id">
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
import axios from '@/api/axios.js';
import { onMounted, reactive, watch } from 'vue';
import useGoodsStore from '@/store/goods.js'
import { useRouter } from 'vue-router';
import { showLoadingToast, closeToast } from 'vant';

let state = reactive({
  goodsData: {},
  goodsData1: {}
})
const store = useGoodsStore()

onMounted(async () => {
  showLoadingToast({ message: '加载中', forbidClick: true, duration: 0 })
  const allgoods = await axios.get('/type')
  state.goodsData = allgoods.find(item => item.id === store.state.id).goods
  state.goodsData1 = allgoods.find(item => item.id === store.state.id).goods1
  watch(() => store.state.id, (newVal) => {
    // console.log(newVal);
    //拿到仓库的导航某一种类的id作为数组下标，刚好对应相应种类的数据
    state.goodsData = allgoods.find(item => item.id === newVal).goods
    state.goodsData1 = allgoods.find(item => item.id === newVal).goods1
  })
  closeToast()
})
const router = useRouter()
const gotoDetail = (item) => {
  router.push({ path: `/product/${item.id}` })
  store.changeId(0)
}
</script>

<style lang="less" scoped>
.goods-wrap {
  display: flex;
  background: #f1f1f1;
  border-radius: 5%;
  margin-top: 95px;

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

      &:nth-last-child(1) {
        margin-bottom: 105px;
      }

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