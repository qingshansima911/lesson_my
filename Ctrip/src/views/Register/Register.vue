<template>
    <div class="page">
        <div class="page_header">账号密码{{ state.type }}</div>
        <div class="page_body" v-if="state.type==='登录'">
            <div class="page_body__form">
                <van-form @submit="onSubmit">
                    <van-field 
                        :rules="[{required: true, message: '请填写用户名'}]"
                        placeholder="境内手机/用户名/邮箱/卡号">
                    </van-field>
                    <van-field 
                        :rules="[{required: true, message: '请填写密码'}]"
                        placeholder="登录密码">
                    </van-field>
                </van-form>
            </div>
            <div class="page_body__button">
                <div class="toggle" @click="toggle('注册')">立即注册</div>
                <van-button round block color="#FF7D01" native-type="submit">登录</van-button>
            </div>
        </div>
        <div class="page_body" v-if="state.type==='注册'">
            <div class="page_body__form">
                <van-form @submit="onSubmit">
                    <van-field 
                        :rules="[{required: true, message: '请填写用户名'}]"
                        placeholder="境内手机/用户名/邮箱/卡号">
                    </van-field>
                    <van-field 
                        :rules="[{required: true, message: '请填写密码'}]"
                        placeholder="登录密码">
                    </van-field>
                </van-form>
            </div>
            <div class="page_body__button">
                <div class="toggle" @click="toggle('登录')">已有登录账号</div>
                <van-button round block color="#FF7D01" native-type="submit">注册</van-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
    type: '登录'
})
const toggle = (type) => {
    state.type = type
}

</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl';
.page
    background-color pink
    wh(100vw,100vh)
    .page_header
        font-size .8rem /* 30/37.5 */
        color white
        padding 1.066667rem  .3rem  .533333rem  .3rem
    .page_body__button
        padding .3rem 
        .toggle
            color white 
            padding .3rem 0
            font-size .4rem
</style>