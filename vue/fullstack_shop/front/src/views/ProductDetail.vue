<template>
  <div class="detail-header">
    <Header title="商品详情" left-arrow @click-left="onClickLeft" />
  </div>

  <van-swipe>
    <van-swipe-item @click="state.show = true" v-for="item in state.allImgUrl">
      <img :src="item" alt="">
    </van-swipe-item>

    <template #indicator="{ active }">
      <div class="custom-indicator">{{ active + 1 }}/{{ state.allImgUrl.length }}</div>
    </template>
  </van-swipe>
  <!-- 
  <div class="product-wrap">
    <div class="name">{{ state.productDetail.name }}</div>
    <div class="price">￥{{ state.productDetail.price }}</div>
    <span class="min">{{ state.productDetail.min }}件起批</span>
    <div class="guarantee">{{ state.productDetail.guarantee }}</div>

    <div class="seller">
      <i class="iconfont icon-shangpu"></i>
      <div class="seller-desc">
        <div class="shop">{{ state.productDetail.shop }}</div>
        <div class="address">{{ state.productDetail.address }}</div>
      </div>
      <div class="goseller">
        <van-button plain type="warning" size="mini">进店逛逛</van-button>
      </div>
    </div>
  </div>

  <div class="smilar-product">
    <div class="title">相似商品</div>
    <GoodsList />
  </div>

  <div class="footer">
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-action-bar-icon @click="gotoCart" icon="cart-o" :badge="cart.badge ? cart.badge : ''" text="购物车" />
      <van-action-bar-icon icon="star" text="收藏" />
      <van-action-bar-button @click="addCart" type="warning" text="加入购物车" />
      <van-action-bar-button @click="goToAddCart" type="danger" text="立即购买" />
    </van-action-bar>
  </div>

  <Model v-show="state.show" @hidden="handle" /> -->
</template>

<script setup>
// import axios from '@/api/axios.js';
// import { onMounted } from 'vue';
import { reactive } from 'vue';
// import { useRoute, useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
// import GoodsList from '@/components/GoodsList.vue'
// import { showToast } from 'vant';
// import useCartStore from '@/store/cart.js'
// import useGoodsStore from '@/store/goods.js'
// import Model from '@/components/Model.vue'


// const store = useGoodsStore()
// const cart = useCartStore()
// const route = useRoute()
// const router = useRouter()

const state = reactive({
  allImgUrl: [],
  // productDetail: [],
  // userData: {},
  show: false
})

const onClickLeft = () => {
  window.history.back();
}

// const gotoCart = () => {
//   //跳转到购物车页面
//   router.push('/cart')
// }

// const addCart = async () => {
//   //往购物车数据中植入一条数据
//   const res = await axios.post('/cartAdd', {  //拿到该商品的所有数据
//     id: state.productDetail.id,
//     username: state.userData.username,
//     name: state.productDetail.name,
//     price: state.productDetail.price,
//     max: state.productDetail.max,
//     min: state.productDetail.min,
//     shop: state.productDetail.shop,
//     address: state.productDetail.address,
//     guarantee: state.productDetail.guarantee,
//     imgUrl: state.productDetail.imgUrl,
//     num: state.productDetail.num
//   })
//   if (res.code === '80000') {
//     //更新购物车角标
//     cart.changeBadge()  //购物车角标更新
//     showToast(res.msg);
//   }
// }

// const goToAddCart = async () => {
//   //先往购物车数据中植入一条数据
//   //再跳转到购物车页面
//   const res = await axios.post('/cartAdd', {  //拿到该商品的所有数据
//     id: state.productDetail.id,
//     username: state.userData.username,
//     name: state.productDetail.name,
//     price: state.productDetail.price,
//     max: state.productDetail.max,
//     min: state.productDetail.min,
//     shop: state.productDetail.shop,
//     address: state.productDetail.address,
//     guarantee: state.productDetail.guarantee,
//     imgUrl: state.productDetail.imgUrl,
//     num: state.productDetail.num
//   })
//   if (res.code === '80000') {
//     //更新购物车角标
//     cart.changeBadge()  //购物车角标更新
//     showToast(res.msg);
//     setTimeout(() => {
//       router.push({ path: '/cart' })
//     }, 1000)
//   }
// }

// onMounted(async () => {
// cart.changeBadge()  //购物车角标更新
// const { id } = route.params
// const { data } = await axios.post(`/productDetail/${store.id}/${id}`)
// state.allImgUrl = data.allImgUrl
// state.productDetail = data
// state.userData = JSON.parse(sessionStorage.getItem('userInfo')) //拿到登录者的用户名以便查询他的购物车数据
// })

const handle = (e) => {
  state.show = e
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background: #f86c35;
}

.detail-header {
  width: 100%;
  position: fixed;
  z-index: 100;
  opacity: 1;
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}

.van-swipe-item {
  width: 100%;
  height: 375px;

  img {
    width: 100%;
    display: block;
  }
}

.product-wrap {
  padding: 10px;

  .name {
    font-size: 17px;
    margin-bottom: 10px;
  }

  .price {
    color: #ff0000;
    font-size: 20px;
    display: inline-block;
    margin-right: 10px;
  }

  .min {
    color: #858585;

  }

  .guarantee {
    margin-top: 10px;
  }

  .seller {
    margin-top: 10px;
    position: relative;
    border-top: 1px solid #dfdfdf;

    .icon-shangpu {
      color: #f86c35;
      font-size: 38px;
    }

    .seller-desc {
      display: inline-block;
      margin-left: 10px;

      .shop {
        font-size: 14px;
        font-weight: 700;
      }

      .address {
        font-size: 10px;
        color: #858585;
      }
    }

    .goseller {
      position: absolute;
      right: 0;
      top: 15px;
    }
  }
}

.smilar-product {
  border-top: 10px solid #dfdfdf;

  .title {
    font-size: 15px;
    margin: 5px 10px;
  }
}

.footer {
  position: fixed;
  bottom: 0;
}
</style>