<template>
  <div class="login">
    <s-header :name="state.type==='login'?'登录':'注册'"></s-header>
    <div class="login-body login" v-if="state.type==='login'">
      <!-- 登录表单 -->
      <van-form @submit="onSubmit">
        <van-field
            name="username"
            v-model="state.username"
            label="用户名"
            placeholder="请输入用户名"  
            :rules="[{required: true, message: '请填写用户名'}]"
            >
            </van-field> 
            <van-field
                name="password"
                v-model="state.password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                :rules="[{required: true, message: '请填写密码'}]"
            >
            </van-field> 
            <div style="margin:16px;">
                <div class="link-login" @click="toggle('register')">立即注册</div>
                <van-button round block color="#1baeae" native-type="submit">登录</van-button>
            </div>
      </van-form>
    </div>
    <div class="login-body registry" v-else>
      <!-- 注册的表单 -->
      <van-form @submit="onSubmit">
        <van-field
          name="username1"
          v-model="state.username1"
          label="用户名"
          placeholder="请输入用户名"  
          :rules="[{required: true, message: '请填写用户名'}]"
        >
        </van-field>
        <van-field
          name="password1"
          v-model="state.password1"
          type="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{required: true, message: '请填写密码'}]"
        >
        </van-field>     
        <van-field 
            center
            clearable
            label="验证码"
            placeholder="输入验证码"
            v-model="state.verify"
        >
            <template #button>
                <vue-img-verify ref="verifyRef" />
            </template>
        </van-field>    
        <div style="margin:16px;">
          <div class="link-login" @click="toggle('login')">已有登录账号</div>
          <van-button round block color="#1baeae" native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
    import sHeader from '@/components/SimpleHeader.vue'
    import { reactive, ref } from 'vue'
    import { useUserStore } from '@/store/user.js'
    import { useRouter } from 'vue-router'
    import { login, register } from '@/service/user.js'
    import md5 from 'js-md5'
    import vueImgVerify from '~/VueImageVerify.vue'
    // import { showFailToast } from 'vant'

    const state = reactive({
        type: 'login',
        username1: '',
        password1: '',
        verify:''
    })
    const verifyRef = ref(null)
    const router = useRouter()

    const user = useUserStore()
    if (user.isLogin) {
        // 如果用户已经登录， 送去首页  
        // router.push({
        //     path: '/'
        // })
    }

    const toggle = (type) => {
        state.type = type
    }

    const onSubmit = async (values) => {
        // console.log(verifyRef);
        // console.log(values)
        // state.imgCode = verifyRef.value.state.imgCode || ''
        // if (state.verify.toLowerCase() != state.imgCode.toLowerCase()) {
        //     showFailToast('验证码错误')
        //     return
        // }
        if (state.type === 'login') {
            // console.log(md5(values.password));
            const data = await login({
            "loginName" : values.username,
            "passwordMd5" : md5(values.password)
            })
            // console.log(data);
            localStorage.setItem('token', data.data )// 服务器会返回令牌环
            // window.location.href = '/'

        }else{
            const data = await register({
            "loginName": values.username1,
            "password": values.password1
        })
        // console.log(data);
        }
    }
</script>

<style lang="stylus" scoped>

</style>