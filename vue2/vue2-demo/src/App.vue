<template>
    <div>
        <v-header :seller="seller"/>
        <div class="tab border-1px">
            <div class="tab-item">
                <router-link to="/goods">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/ratings">评论</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/seller">商家</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
// 没有composition api 没有setup语法糖
// 类式 this 
import header from './components/header/Header.vue'
import sellerData from './mock/data/seller.json'
export default {
    data() {
        return {
            seller:{}
        }
    },
    mounted() {
        // console.log(this.$router,this.$route); // useRouter
        setTimeout(() => {
            this.seller = sellerData.data
        }, 1000);
    },
    components: {
        'v-header':header
    }
}
</script>

<style lang="stylus">
@import './assets/stylus/mixin.styl';
.tab 
    display flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7,17,27,.1))
    .tab-item
        flex 1
        text-align center
        & > a
            display blick
            font-size 14px
            color rgb(77,85,93)
            &.active
                color rgb(240,20,20)
</style>