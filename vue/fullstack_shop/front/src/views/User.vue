<template>
  <div class="header">
    <div class="title" v-if="state.userData !== null">
      你好，{{ state.userData.username }} !
      <div class="btn">
        编辑资料
      </div>
    </div>

    <div class="title" v-else>
      你好，请登录!
      <div class="btn" @click="goLogin">
        点击登录
      </div>
    </div>

    <div class="handle" @click="signOut">
      <i class="iconfont icon-shezhi"></i>
    </div>
  </div>

  <div class="order-wrap">
    <div class="order-nav">
      <span>我的订单</span>
      <span class="all">查看全部></span>
    </div>

    <ul class="order-content">
      <li>
        <i class="iconfont icon-daifukuan"></i>
        <span>待付款</span>
      </li>
      <li>
        <i class="iconfont icon-daifahuo"></i>
        <span>待发货</span>
      </li>
      <li>
        <i class="iconfont icon-daishouhuo"></i>
        <span>待收货</span>

      </li>
      <li>
        <i class="iconfont icon-daipingjia"></i>
        <span>待评价</span>

      </li>
      <li>
        <i class="iconfont icon-shouhou"></i>
        <span>退款/售后</span>

      </li>
    </ul>
  </div>
  <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const state = reactive({
  userData: {}
})

//拿到登录者的用户名以便查询他的购物车数据
state.userData = JSON.parse(sessionStorage.getItem('userInfo')) 

const router = useRouter()
const goLogin = () => {
  router.push('/login')
}

const signOut = () => {
  router.push('/login')
  sessionStorage.removeItem('userInfo')
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 150px;
  background: #f86c35;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  .title {
    font-size: 15px;
    text-align: center;

    .btn {
      width: 80px;
      height: 20px;
      border: 1px solid #ffffff;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: xx-small;
      margin-top: 6px;
    }
  }

  .icon-shezhi {
    font-size: 20px;
  }
}

.order-wrap {
  width: 95%;
  height: 100px;
  background-color: #ffffff;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: -40px;

  .order-nav {
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    font-size: 13px;

    .all {
      font-size: 10px;
      color: #7a7a7a;
    }
  }

  .order-content {
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      text-align: center;

      .iconfont {
        color: #f86c35;
        font-size: 20px;
      }

      span {
        display: block;
      }
    }

  }
}
</style>

<style>
body {
  background-color: #fbfafa;
}
</style>