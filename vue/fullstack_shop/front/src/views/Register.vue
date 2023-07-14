<template>
  <Header title="注册" left-arrow @click-left="onClickLeft" />

  <div class="register-wrap">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="state.username" name="用户名" label="用户名" placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="state.password" type="password" name="密码" label="密码" placeholder="设置密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { useRouter } from 'vue-router';
import { reactive } from 'vue'
import axios from '@/api/axios.js';
import { showSuccessToast } from 'vant';

const state = reactive({
  username: '',
  password: ''
})
const router = useRouter()
const onClickLeft = () => {
  router.push('/login')
}

const onSubmit = async () => {
  let res = await axios.post('/users/register', {
    username: state.username,
    password: state.password
  })
  // console.log(res);
  if (res.code === '80000') {
    showSuccessToast('注册成功');
    setTimeout(() => {
      router.push({ path: '/login' })
    }, 1000)
  }
}
</script>

<style lang="less" scoped>
.register-wrap {
  width: 100%;
  margin-top: 20px;
}
</style>