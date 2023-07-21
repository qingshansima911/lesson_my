<template>
  <Header title="提交订单" left-arrow @click-left="onClickLeft" />

  <div class="address-wrap" @click="gotoAddressList">
    <div class="name">
      <span>收货人：{{ state.defaultAddress.name }} </span>
      <span class="phone">{{ state.defaultAddress.tel }}</span>
    </div>
    <div class="address">
      {{ state.defaultAddress.address }}
    </div>
    <van-icon name="arrow" class="arrow" />
  </div>

  <div class="goods-wrap" v-for="item in state.orderData" :key="item[0].id">
    <div class="seller">
      <i class="iconfont icon-shangpu"></i>
      {{ item[0].shop }}
    </div>

    <van-card :num="item[0].num" :price="`${item[0].price}.00`" :title="item[0].name" :thumb="item[0].imgUrl" />

    <div class="small-calc">
      <span class="num">共{{ item[0].num }}件商品 </span>
      <span class="small-sum">小计：￥{{ item[0].num * item[0].price }}</span>
    </div>
  </div>


  <van-submit-bar class="sub-all" :price="state.totalPrice * 100" button-text="提交订单" @submit="onSubmit">
  </van-submit-bar>
</template>

<script setup>
import Header from '@/components/Header.vue'
import { useRoute, useRouter } from 'vue-router';
import axios from '@/api/axios.js';
import { reactive, onMounted } from 'vue';

const state = reactive({
  orderData: [],
  totalPrice: 0,
  defaultAddress: {}
})

const router = useRouter()
const onClickLeft = () => {
  router.push('/cart')
}


const route = useRoute()
// console.log(route.query);//用useRoute接收路由传过来的勾选商品id的数组
onMounted(async () => {
  //获取默认地址
  const result = await axios.get('/defaultFind')
  // console.log(result);
  state.defaultAddress = result.data[0]
  // console.log(state.defaultAddress);

  //获取订单数据
  for (let key in route.query[0]) {
  // console.log(route.query[0], route.query[1]);
  let res = await axios.post('/cartFind', {
    id: route.query[0][key],
    username: route.query[1]
  })
  // console.log(route.query[0][key]);
  state.totalPrice += (res.data[0].price * res.data[0].num)
  state.orderData.push(res.data);
  }
})

const gotoAddressList = () => {
  router.push('/address')
}

const onSubmit = () => {

}
</script>

<style lang="less" scoped>
.address-wrap {
  background: #fff;
  font-size: 14px;
  padding: 15px;
  color: #222333;
  margin-bottom: 10px;
  position: relative;


  .name {
    font-size: 17px;
    line-height: 17px;
    margin: 10px 20px;
    display: flex;
    justify-content: space-between;

    .phone {
      font-size: 14px;
      line-height: 14px;
    }
  }

  .address {
    font-size: 13px;
    color: #868686;
    margin: 0 20px;
  }

  .arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    color: #868686;
  }
}

.address-wrap::after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: repeating-linear-gradient(-45deg, var(--van-warning-color) 0, var(--van-warning-color) 20%, transparent 0, transparent 25%, var(--van-primary-color) 0, var(--van-primary-color) 45%, transparent 0, transparent 50%);
  background-size: 80px;
  content: "";
}

.goods-wrap {
  width: 100%;

  .seller {
    width: 100%;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    padding: 0 15px;
    background: #ffffff;

    .icon-shangpu {
      color: #f86c35;
      font-size: 18px;
    }
  }

  .small-calc {
    width: 100%;
    height: 50px;
    background: #ffffff;
    margin: 5px 0 10px 0;
    font-size: 15px;
    line-height: 50px;
    padding-left: 200px;

    .small-sum {
      color: #ff0000;
    }
  }
}

.sub-all {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

<style>
.van-card__content {
  padding: 10px 0 !important;
}

.van-card__price {
  color: #ff0000;
}

.van-card__title {
  font-size: 14px;
}

body {
  background: #f8f8f8;

}
</style>