<template>
    <div class="page">
        <ScanHeader/>
        <div class="page_center">
            <div class="page_center__profile">
                <div class="profile-top">
                    <div class="profile-left">
                        <i class="iconfont icon-wode"></i>
                    </div>
                    <div class="profile-center">
                        <div class="text">尊敬的携程用户</div>
                        <div class="community">社区lv.1</div>
                    </div>
                    <div class="profile-right">
                        <i class="iconfont icon-zuanshi"></i>
                        <div class="vip">普通会员</div>
                    </div>
                </div>
                <div class="profile-bottom">
                    <input 
                        class="input"
                        type="text" placeholder="简单自我介绍,让你更受欢迎">
                    <ul>
                        <li>粉丝 0</li>
                        <li>关注 0</li>
                        <li>获赞 0</li>
                        <li>赞过 0</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="page_body">
            <div class="page_body__nav">
                <router-link to="/myctrip" class="page_body__item">我的携程</router-link>
                <router-link to="/homepage" class="page_body__item">个人主页</router-link>
            </div>
            <router-view></router-view>
        </div>
        <nav-bar></nav-bar>
    </div>
</template>

<script setup>
import NavBar from '~/NavBar.vue';
import ScanHeader from '~/ScanHeader.vue';

</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl';
.page
    background-image: linear-gradient(to left bottom,skyblue,white);
    padding-bottom 1rem
    wh(100%,100%)
    .page_center
        .page_center__profile
            margin .28rem
            background-color #fff
            border-radius .266667rem /* 10/37.5 */
            padding-bottom .2rem
            .profile-top
                display flex
                // background-color pink
                margin .466667rem  .3rem .2rem .3rem
                .profile-left
                    padding 0 .5rem
                    .icon-wode
                        font-size 1rem /* 30/37.5 */
                .profile-center
                    // flex 1
                    // background-color yellow
                    padding 0 .2rem
                    .text
                        font-weight 700
                        font-size .4rem /* 30/37.5 */
                .profile-right
                    fj()
                    padding 0.1rem
                    color #5BB7FE
            .profile-bottom 
                fd()
                margin 0 /* 10/37.5 */ .3rem 
                ul
                    fj()
                    width 50%
                .input
                    margin .15rem 0 
                    border none
    .page_body
        background-color #F4F4F4
        border-radius .266667rem /* 10/37.5 */
        .page_body__nav
            fj(space-around)
            padding .2rem 0
            .page_body__item
                font-size .393333rem /
            .router-link-active
                font-weight 700
</style>