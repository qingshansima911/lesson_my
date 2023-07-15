<template>
  <Header title="收货地址" left-arrow @click-left="onClickLeft" />

  <div class="address-wrap">
    <van-address-list v-model="state.chosenAddressId" :list="state.addressData" default-tag-text="默认" @add="onAdd"
      @edit="onEdit" @select="change()" />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import axios from '@/api/axios.js'
import { reactive } from 'vue';
import { onMounted } from 'vue';
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const state = reactive({
  addressData: [],
  userData: {},
  chosenAddressId: 0
})

onMounted(async () => {
  state.userData = JSON.parse(sessionStorage.getItem('userInfo'))
  const res = await axios.post('/addressList', {
    username: state.userData.username
  })
  state.addressData = res.data
  // console.log(state.addressData);
})

const change = async () => {
  //修改数据库中的新选中的isDefault字段为true 旧的修改为false
  const result = await axios.get('/defaultFind')
  // console.log(result.data[0].id);
  await axios.post('/defaultModify', {
    isDefault: 0,
    id: result.data[0].id
  })
  await axios.post('/defaultModify', {
    isDefault: 1,
    id: state.chosenAddressId
  })
  // window.history.back();
}

const onClickLeft = () => {
  window.history.back();
}

const router = useRouter()
const onAdd = () => {
  router.push('/addressAdd')
}
const onEdit = (item, index) => {
  // console.log(item,index);
  router.push({ path: '/addressEdit', query: { id: index + 1 } })
}
</script>

<style lang="less" scoped>
.address-wrap {
  margin-bottom: 50px;
}
</style>