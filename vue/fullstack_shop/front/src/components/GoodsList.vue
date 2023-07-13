<template>
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
import axios from '@/api/axios.js';
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { showLoadingToast, closeToast } from 'vant';

const router = useRouter()

const state = reactive({
  goodsList: [],
  goodsList1: []
})

const gotoDetail = (item) => {
  router.push({ path: `/product/${item.id}` })
}

// const imgs = document.querySelectorAll('img');
// imgs.forEach(img => {
//   const height = img.clientHeight;
//   img.style.height = height + "px";
// });

onMounted(async () => {
  showLoadingToast({ message: '加载中', forbidClick: true, duration: 0 })
  const res = await axios.get('/goodsList')
  state.goodsList = res.goodsList
  state.goodsList1 = res.goodsList1
  closeToast()

})
</script>

<style lang="less" scoped>
.goods-wrap {
  display: flex;
  background: #f1f1f1;
  border-radius: 5px;

  .goods-list {
    display: flex;
    flex: 1;
    flex-direction: column;
    border-radius: 5px;
    width: 45%;
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