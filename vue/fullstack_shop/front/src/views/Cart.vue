<template>
  <div class="header">
    <div class="title">
      购物车
      <div class="sum">共{{ state.cartData.length }}件商品</div>
    </div>

    <div class="handle">管理</div>
  </div>

  <div class="cart-wrap" v-if="state.cartData.length">
    <div class="cart-content" v-for="item in state.cartData" :key="item.id">
      <div class="seller">
        <i class="iconfont icon-shangpu"></i>
        <span>{{ item.shop }}</span>
      </div>
      <van-checkbox-group v-model="state.result" ref="checkboxGroup">
        <van-swipe-cell>
          <van-checkbox :name="item.id" />
          <van-card :price="`${item.price}.00`" desc="描述信息" :title="item.name" :thumb="item.imgUrl">
            <template #footer>
              <van-stepper v-model="item.num" :min="item.min" :max="item.max" @change="onChange" :name="item.id" />
            </template>
          </van-card>
          <template #right>
            <van-button @click="cartDelete(item.id)" square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>

  </div>

  <div class="no-cart" v-else>购物车是空的，去逛逛吧</div>
  <van-submit-bar class="sub-all" :price="totalPrice * 100" button-text="结算" @submit="onSubmit">
    <van-checkbox v-model="state.checkedAll" @click="allCheck">全选</van-checkbox>
  </van-submit-bar>
  <van-divider class="like" :style="{ color: '#f86c35', borderColor: '#f86c35', padding: '0 16px' }">
    猜你喜欢
  </van-divider>

  <GoodsList />
  <Footer :dot="state.cartData.length" />
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import GoodsList from '@/components/GoodsList.vue'
import { reactive, nextTick, computed, watch } from 'vue';
import axios from '@/api/axios'
import { showToast } from 'vant';
import { showLoadingToast, closeToast, } from 'vant';
import { useRouter } from 'vue-router';

const state = reactive({
  userData: {},
  cartData: [],
  result: [],
  checkedAll: false
})

const router = useRouter()
//购物车列表
nextTick(async () => {
  showLoadingToast({ message: '加载中', forbidClick: true, duration: 0 })
  //拿到登录者的用户名以便查询他的购物车数据
  state.userData = JSON.parse(sessionStorage.getItem('userInfo'))
  //判断sessionStorage里是否存在用户数据，不存在跳去登录，存在则获取其购物车数据
  if (state.userData == null) {
    setTimeout(() => {
      showToast('您还未登录哦！');
      // router.push('/login')
    }, 1000)
  } else {
    const res = await axios.post('/cartList', {
      username: state.userData.username
    })
    // console.log(res);
    // console.log(res.data);
    state.cartData = res.data;
    state.result = state.cartData.map(item => item.id)
  }
  closeToast()
})

//修改商品数量
const onChange = async (value, detail) => {
  // console.log(value, detail);
  showLoadingToast({ message: '加载中', forbidClick: true, duration: 0 })
  await axios.post('/cartModify', {
    id: detail.name,
    num: value,
    username: state.userData.username,
  })
  closeToast()
}

//计算总额
const totalPrice = computed(() => {
  let sum = 0
  let _list = state.cartData.filter(item => state.result.includes(item.id))
  _list.forEach(item => {
    sum += item.price * item.num
  });
  return sum
})

//点击全选全部选中
// watch(
//   () => state.checkedAll,
//   (newVal) => {
//     if (!newVal) {
//       state.result = []
//     } else {
//       state.result = state.cartData.map(item => item.id)
//     }
//   })
const allCheck = () => {  //checked为true或false
  if (!state.checkedAll) {
    state.result = []
  } else {
    state.result = state.cartData.map(item => item.id)
    // console.log(state.result);
  }
}

//全部勾选时，全选按钮也要勾选 反选
watch(() => state.result, (newVal) => {
  state.checkedAll = state.cartData.length === newVal.length ? true : false
}
)

//提交订单
const onSubmit = () => {
  router.push({
    path: '/orderSubmit',
    query: [
      state.result,
      state.userData.username
    ]
  })
}

//删除购物车数据
const cartDelete = async (id) => {
  await axios.post('/cartDelete', { id: id, username: state.userData.username })
  window.location.reload();
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 200px;
  background: #f86c35;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  .title {
    font-size: 15px;
  }

  .handle {
    font-size: 13px;
  }
}

.cart-wrap {
  width: 95%;
  margin: -100px 9px 0 9px;

  .cart-content {
    width: 100%;
    background: #f8f8f8;
    border-radius: 10px;
    margin-bottom: 5px;

    .seller {
      display: inline-block;

      .icon-shangpu {
        font-size: 20px;
        color: #fb7e4d;
        margin: 8px;
      }
    }

    .delete-button {
      height: 100%;
    }

  }
}

.no-cart {
  width: 95%;
  height: 35%;
  background-color: #f8f8f8;
  margin: -100px 9px 0 9px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sub-all {
  position: fixed;
  bottom: 50px;
}
</style>

<style>
.van-swipe-cell__wrapper {
  display: flex;
  padding-left: 15px;
}

.van-checkbox {
  width: 22px;
}

.van-card {
  flex: 1;
}

.van-card__footer {
  position: absolute;
  right: 16px;
  bottom: 5px;
}

.van-card__price {
  color: red;
  font-size: 15px;
}

.van-checkbox {
  width: 60px;
}

.van-divider {
  font-weight: 600;
}

.van-divider:before,
.van-divider:after {
  border-width: 1px;
}

body {
  background-color: #f8f8f8;
}
</style>