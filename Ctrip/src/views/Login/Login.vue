<template>
  <div class="page">
    <div class="page_header">账号密码{{ state.type }}</div>
    <div class="page_body" v-if="state.type === 'login'">
      <div class="page_body__form">
        <van-form>
          <van-field @input="isInput" v-model="state.username" :rules="[{ required: true, message: '请填写用户名' }]"
            placeholder="境内手机/用户名/邮箱/卡号">
          </van-field>
          <van-field @input="isInput" v-model="state.password" type="password"
            :rules="[{ required: true, message: '请填写密码' }]" placeholder="登录密码">
          </van-field>
        </van-form>
      </div>
      <div class="page_body__button">
        <div class="toggle" @click="toggle('register')">立即注册</div>
        <van-button @click="login" :class="{ active: state.color }" class="button" native-type="submit">登录</van-button>
      </div>
    </div>

    <div class="page_body" v-if="state.type === 'register'">
      <div class="page_body__form">
        <van-form>
          <van-field @input="Input" v-model="state.username2" :rules="[{ required: true, message: '请填写用户名' }]"
            placeholder="境内手机/用户名/邮箱/卡号">
          </van-field>
          <van-field @input="Input" v-model="state.password2" type="password"
            :rules="[{ required: true, message: '请填写密码' }]" placeholder="登录密码">
          </van-field>
          <van-field @input="Input" center clearable placeholder="输入验证码" v-model="state.verify">
            <template #button>
              <vue-img-verify ref="verifyRef" />
            </template>
          </van-field>
        </van-form>
      </div>
      <div class="page_body__button">
        <div class="toggle" @click="toggle('login')">已有登录账号</div>
        <van-button :class="{ active: state.color }" @click="register" class="button" native-type="submit">注册</van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import vueImgVerify from '~/VueImageVerify.vue'
import { useRouter } from 'vue-router'
import { showFailToast } from 'vant'
import { useMyStore } from '@/store/my.js'
import { Base64 } from 'js-base64'
// import md5 from 'js-md5'

const myStore = useMyStore();
const router = useRouter()
const verifyRef = ref(null)
const state = reactive({
  type: 'login',
  username: '',
  password: '',
  username2: '',
  password2: '',
  verify: '',
  color: false
})
const toggle = (type) => {
  state.type = type
  state.color = false
  state.username = ''
  state.username2 = ''
  state.password = ''
  state.password2 = ''
  state.verify = ''
}
const isInput = () => {
  if (state.username !== '' && state.password !== '') {
    state.color = true
  } else {
    state.color = false
  }
}
const Input = () => {
  if (state.username2 !== '' && state.password2 !== '' && state.verify !== '') {
    state.color = true
  } else {
    state.color = false
  }
}

const loginMsg = computed(() => myStore.loginMsg)
const registerMsg = computed(() => myStore.registerMsg)
const login = async () => {
  await myStore.Login({
    userName: state.username,
    password: Base64.encode(state.password)
  })
  // console.log(user.value);
  if (loginMsg.value.status === 200) {
    showFailToast('登录成功')
    router.push({
      path: '/home',
    })
    localStorage.setItem('token', loginMsg.value.token)
  } else {
    showFailToast('账号或密码有误')
  }
}
const register = async () => {
  await myStore.Register({
    userName: state.username,
    password: state.password
  })
  state.imgCode = verifyRef.value.state.imgCode || ''
  // console.log(verifyRef);
  // console.log(values)
  if (state.verify.toLowerCase() != state.imgCode.toLowerCase()) {
    showFailToast('验证码错误')
    return
  } else {
    // console.log(registerMsg.value.status);
    if (registerMsg.value.status === 200) {
      showFailToast('注册成功！去登录')
    } else {
      showFailToast('已有账号，注册失败')
    }
  }
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
            .button
                background-color gray
                color black
                width 100%
                border-radius 6px
                &.active
                    color white 
                    background-color #FF7D01
        // .van-field
        //     background green
        //     color red
        .page_body__form
            .van-form>>>.van-cell
                background none
            .van-form>>>.van-field__control
                font-size .4rem
</style>