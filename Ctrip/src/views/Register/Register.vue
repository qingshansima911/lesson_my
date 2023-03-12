<template>
    <div class="page">
        <div class="page_header">账号密码{{ state.type }}</div>
        <div class="page_body" v-if="state.type==='登录'">
            <div class="page_body__form">
                <van-form @submit="onSubmit">
                    <van-field 
                        v-model="state.username"
                        :rules="[{required: true, message: '请填写用户名'}]"
                        placeholder="境内手机/用户名/邮箱/卡号">
                    </van-field>
                    <van-field 
                        v-model="state.password"
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
                        v-model="state.username"
                        :rules="[{required: true, message: '请填写用户名'}]"
                        placeholder="境内手机/用户名/邮箱/卡号">
                    </van-field>
                    <van-field 
                        v-model="state.password"
                        :rules="[{required: true, message: '请填写密码'}]"
                        placeholder="登录密码">
                    </van-field>
                    <van-field 
                        center
                        clearable
                        placeholder="输入验证码"
                        v-model="state.verify">
                        <template #button>
                            <vue-img-verify ref="verifyRef" />
                        </template>
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
import { reactive, ref } from 'vue'
import vueImgVerify from '~/VueImageVerify.vue'
// import md5 from 'js-md5'

const verifyRef = ref(null)
const state = reactive({
    type: '登录',
    username1: '',
    password1: '',
    verify:''
})
const toggle = (type) => {
    state.type = type
}

const onSubmit = async () => {
    
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl';
.page
    background-image url('https://i.328888.xyz/2023/03/02/660JX.jpeg')
    // background-size cover
    wh(100vw,100vh)
    .page_header
        font-size .8rem /* 30/37.5 */
        color white
        padding 1.066667rem  .3rem  .533333rem  .3rem
    .page_body
        .page_body__button
            padding .3rem 
            .toggle
                color white 
                padding .3rem 0
                font-size .4rem
        // .van-field
        //     background green
        //     color red
</style>