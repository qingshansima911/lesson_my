<template>
  <Header title="编辑收货地址" left-arrow @click-left="onClickLeft" />

  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field v-model="state.addressData.name" name="姓名" label="姓名" placeholder="姓名"
        :rules="[{ required: true, message: '请填写姓名' }]" />
      <van-field v-model="state.addressData.tel" name="电话" label="电话" placeholder="电话"
        :rules="[{ required: true, message: '请填写电话' }]" />

      <van-field v-model="state.addressData.address" is-link readonly name="area" label="地区选择" placeholder="点击选择省市区"
        @click="showArea = true" />
      <van-popup v-model:show="showArea" position="bottom">
        <van-area :area-list="areaList" @confirm="onConfirm" @cancel="showArea = false" />
      </van-popup>

      <van-button @click="addressEdit" type="primary" block>确认修改</van-button>

      <van-button class="delete" @click="addressDelete" type="primary" block>删除</van-button>
    </van-cell-group>

  </van-form>
</template>

<script setup>
import Header from '@/components/Header.vue'
import axios from '@/api/axios.js'
import { areaList } from '@vant/area-data';
import { ref, onMounted, reactive } from 'vue';
import { showSuccessToast } from 'vant';
import { useRoute } from 'vue-router';

const state = reactive({
  addressData: {}
})

const route = useRoute()
onMounted(async () => {
  // console.log(route.query.id);
  //根据id查找地址
  const res = await axios.post('/addressFind', {
    id: route.query.id
  })
  state.addressData = res.data[0]
  // console.log(state.addressData);
})

const showArea = ref(false);
const onConfirm = ({ selectedOptions }) => {
  showArea.value = false;
  state.addressData.address = selectedOptions.map((item) => item.text).join(' ');
};

const onClickLeft = () => {
  window.history.back();
}

const addressEdit = async () => {
  const res = await axios.post('/addressModify', {
    name: state.addressData.name,
    tel: state.addressData.tel,
    address: state.addressData.address,
    id: route.query.id
  })
  if (res.code === '80000') {
    showSuccessToast('修改成功');
    window.history.back();
  }
}

const addressDelete = async () => {
  const res = await axios.post('/addressDelete', {
    id: route.query.id
  })
  if (res.code === '80000') {
    showSuccessToast('删除成功');
    window.history.back();
  }
}
</script>

<style lang="less" scoped>
.delete {
  margin-top: 10px;
}
</style>
