<template>
  <Header title="添加收货地址" left-arrow @click-left="onClickLeft" />

  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field v-model="state.name" name="姓名" label="姓名" placeholder="姓名"
        :rules="[{ required: true, message: '请填写姓名' }]" />
      <van-field v-model="state.tel" name="电话" label="电话" placeholder="电话"
        :rules="[{ required: true, message: '请填写电话' }]" />

      <van-field v-model="state.address" is-link readonly name="area" label="地区选择" placeholder="点击选择省市区"
        @click="showArea = true" />
      <van-popup v-model:show="showArea" position="bottom">
        <van-area :area-list="areaList" @confirm="onConfirm" @cancel="showArea = false" />
      </van-popup>

      <van-cell center title="默认">
        <template #right-icon>
          <van-switch v-model="checked" @click="change" />
        </template>
      </van-cell>

      <van-button @click="addressAdd" type="primary" block>添加</van-button>

    </van-cell-group>

  </van-form>
</template>

<script setup>
import Header from '@/components/Header.vue'
import axios from '@/api/axios.js'
import { areaList } from '@vant/area-data';
import { ref, reactive } from 'vue';
import { showSuccessToast } from 'vant';

const state = reactive({
  name: '',
  tel: '',
  address: '',
  isDefault: 0,
  userData: {}
})

const checked = ref(false);
const showArea = ref(false);
const onConfirm = ({ selectedOptions }) => {
  showArea.value = false;
  state.address = selectedOptions.map((item) => item.text).join(' ');
};

//开关切换将isDefault的值改变
const change = () => {
  state.isDefault = state.isDefault === 0 ? 1 : 0
}

//添加地址
const addressAdd = async () => {
  state.userData = JSON.parse(sessionStorage.getItem('userInfo'))
  if (state.isDefault === 1) {
    const result = await axios.get('/defaultFind')
    // console.log(result.data[0].id);
    await axios.put('/defaultModify', {
      isDefault: 0,
      id: result.data[0].id
    })
  }
  const res = await axios.post('/addressAdd', {
    username: state.userData.username,
    name: state.name,
    tel: state.tel,
    address: state.address,
    isDefault: state.isDefault
  })
  if (res.code === '80000') {
    showSuccessToast('添加成功');
    window.history.back();
  }
}

const onClickLeft = () => {
  window.history.back();
}
</script>

<style lang="less" scoped></style>
