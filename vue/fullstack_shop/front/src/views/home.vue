<template>
  <HomeHeader />
  <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
    <div class="content">
      <AllTypes v-if="selectId != 0" />
      <div v-else>
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" lazy-render>
          <van-swipe-item v-for="image in images" :key="image">
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>

        <!-- 中间导航 -->
        <ul class="nav-content">
          <li class="nav-item" v-for="item in menuList" :key="item.categoryId">
            <img :src="item.imgUrl" alt="">
            <span>{{ item.name }}</span>
          </li>
        </ul>

        <!-- 图片导航 -->
        <div class="image-wrap" ref="imageWrap">
          <ul class="image-content">
            <li class="image-item" v-for="item in imageList" :key="item.categoryId">
              <div class="img-color">
                <img :src="item.imgUrl" alt="">
                <div class="color" :style="`background:${item.background}`"></div>
              </div>
              <div class="img-desc">
                <span>义务国际商贸城</span>
                <span>{{ item.area }}</span>
                <div class="smalltext">{{ item.content }}</div>
              </div>
            </li>
          </ul>
        </div>

        <!-- 商品列表 -->
        <GoodsList />
      </div>
    </div>
  </van-pull-refresh>
  <div class="footer">
    <Footer />
  </div>
</template>

<script setup>
import HomeHeader from '@/components/HomeHeader.vue'
import AllTypes from '@/components/AllTypes.vue'
import { reactive, ref, onMounted, watch, nextTick } from 'vue';
import useGoodsStore from '@/store/goods.js'
import BetterScroll from 'better-scroll'
import GoodsList from '@/components/GoodsList.vue'
import Footer from '@/components/Footer.vue'

//定义一个变量存储导航的id值，用来判断id值大于0则显示另一种类页面，不展示首页
const state = reactive({
  refreshing: false,
  loading: false
})
const onRefresh = async () => {
  console.log('刷新');
  state.refreshing = true
  // 重新加载
  await window.location.reload()
  state.refreshing = false
}
let selectId = ref(0)
const store = useGoodsStore()
const images = [
  '../src/assets/images/lb1.jpg',
  '../src/assets/images/lb2.jpg',
];
const menuList =
  [
    {
      name: '限时秒杀',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
      categoryId: 100001
    }, {
      name: '尾货清仓',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
      categoryId: 100003
    }, {
      name: '热卖',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
      categoryId: 100002
    }, {
      name: '订货通',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
      categoryId: 100004
    }, {
      name: '动态',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
      categoryId: 100005
    }, {
      name: '充值缴费',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
      categoryId: 100006
    }, {
      name: '9.9元拼',
      imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
      categoryId: 100007
    }, {
      name: '领劵',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
      categoryId: 100008
    }, {
      name: '省钱',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
      categoryId: 100009
    }, {
      name: '全部',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
      categoryId: 100010
    }, {
      name: '省钱',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
      categoryId: 100011
    }, {
      name: '全部',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
      categoryId: 100012
    }, {
      name: '省钱',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
      categoryId: 100011
    }, {
      name: '全部',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
      categoryId: 100012
    }
  ]

const imageList =
  [
    {
      area: '一区',
      content: '玩具，装饰工艺',
      imgUrl: '../src/assets/images/2.png',
      background: 'linear-gradient(100deg, rgb(38, 161, 202) 10px, rgb(99, 178, 205) 20px, rgb(160, 217, 233) 100px)'
    }, {
      area: '一区东',
      content: '各种饰品，饰品配件',
      imgUrl: '../src/assets/images/3.png',
      background: 'linear-gradient(100deg, rgb(255, 29, 108) 10px, rgb(206, 14, 56) 20px, rgb(230, 110, 122) 100px)'

    }, {
      area: '二区',
      content: '箱包，钟表，小家电',
      imgUrl: '../src/assets/images/4.png',
      background: 'linear-gradient(100deg, rgb(11, 178, 139) 10px, rgb(8, 171, 149) 20px, rgb(134, 237, 197) 100px)'
    }, {
      area: '二区东',
      content: '家装五金，新能源',
      imgUrl: '../src/assets/images/5.png',
      background: 'linear-gradient(100deg, rgb(230, 146, 20) 10px, rgb(228, 165, 47) 20px, rgb(241, 213, 147) 100px)'
    }
  ]
//BScroll
const imageWrap = ref(null) //ref获取dom结构
const _initScroll = () => {
  new BetterScroll(imageWrap.value, {
    click: true,
    scrollX: true,
    scrollY: false,
    probeType: 3
  })

}

onMounted(async () => {
  watch(() => store.state.id, (newVal) => {
    selectId.value = newVal
    // console.log(selectId.value);
  })
  // const res = await axios.post(`https://gitee.com/oauth/token?grant_type=authorization_code&code=${code}&client_id=52780e318c1ebdcddeb8718a0370c1017c51bbc2daab8bf0853fba9913abfdc3&redirect_uri=http://127.0.0.1:8080/home&client_secret=8bd8f42f23c41944046074264c56532b043dbbe88ca1eeb48ff4c44bd80b294d`)
  // console.log(res);
  // setTimeout(() => {
  //   console.log(res);
  // }, 2000)
})
nextTick(() => {
  _initScroll()
})
</script>

<style lang="less" scoped>
.van-swipe-item {
  width: 100%;
  margin-top: 90px;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.nav-content {
  width: 100%;
  height: 140px;
  display: flex;
  flex-flow: column wrap;
  overflow-x: auto;
  background: #f1f1f1;

  .nav-item {
    width: 65px;
    height: 70px;
    text-align: center;
    padding: 8px 8px;

    img {
      width: 36px;
      height: 36px;
    }

    span {
      display: block;
    }
  }
}

::-webkit-scrollbar {
  display: none
}

.image-wrap {
  width: 100vw;
  height: 87px;
  background: #f1f1f1;
  white-space: nowrap;
  overflow: hidden;

  .image-content {
    display: inline-block;

    .image-item {
      display: inline-block;
      font-size: 13px;
      color: #ffffff;
      padding: 8px 8px;

      .img-color {
        width: 130px;
        height: 70px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 8%;
          z-index: 1;
        }

        .color {
          width: 100%;
          height: 100%;
          opacity: 0.7;
          z-index: 3;
          border-radius: 8%;
          margin-top: -76px;
        }
      }

      .img-desc {
        position: absolute;
        top: 12px;
        left: 22px;
        z-index: 5;
        font-size: 14px;

        span {
          display: block;
          font-weight: 800;
        }

        .smalltext {
          font-size: 5px;
          font-weight: 800;
        }
      }
    }
  }

}

.footer {
  position: fixed;
  bottom: 0;
}
</style>