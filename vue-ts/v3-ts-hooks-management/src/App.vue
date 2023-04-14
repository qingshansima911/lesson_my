<template>
    <el-config-provider :locale="zhCn">
        <router-view />
        <!-- <el-calendar> </el-calendar> -->
    </el-config-provider>
</template>

<script setup lang="ts">
// 全局视野框架 element-plus
// inject provide 语言包
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
// import en from 'element-plus/es/locale/lang/en';

</script>
<style>
@import './assets/css/main.css';
@import './assets/css/color-dark.css';
</style>