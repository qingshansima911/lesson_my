<template>
    <div class="container_tools">
        <div class="container_tools__top">
            <div class="mytool">我的工具</div>
            <div class="tools">全部工具 ></div>
        </div>
        <div class="container_tools__bottom">
            <div class="container_tools__item">
                <i class="iconfont icon-idcard1"></i>
                <div class="text">常用信息</div>
            </div>
            <div class="container_tools__item">
                <i class="iconfont icon-gift"></i>
                <div class="text">我的奖品</div>
            </div>
            <div class="container_tools__item">
                <i class="iconfont icon-richangfeiyongbaoxiaoliucheng"></i>
                <div class="text">报销凭证</div>
            </div>
            <div class="container_tools__item">
                <i class="iconfont icon-diqiu"></i>
                <div class="text">旅行足迹</div>
            </div>
        </div>
        <div class="container_tools__bottom">
            <div class="container_tools__item">
                <i class="iconfont icon-dingyue"></i>
                <div class="text">订阅管理</div>
            </div>
            <div class="container_tools__item">
                <i class="iconfont icon-shuidihdpi"></i>
                <div class="text">我的信用</div>
            </div>
            <div class="container_tools__item">
                <i class="iconfont icon-qingdan"></i>
                <div class="text">出行清单</div>
            </div>
            <div class="container_tools__item">
                <i class="iconfont icon-wodexuesheng"></i>
                <div class="text">学生权益</div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl'
.container_tools     
        padding .3rem 
        background-color #fff
        border-radius  .266667rem
        margin .3rem 
        .container_tools__top
            fj()
            padding-bottom .3rem
            .mytool
                font-weight 700
                font-size .36rem /* 15/37.5 */
        .container_tools__bottom
            fj()
            .container_tools__item
                fd()
                align-items center
                .text
                    color #666
                    font-size .36rem /* 15/37.5 */
                    padding .1rem 0
                .iconfont
                    font-size 26px
                    color #666
</style>