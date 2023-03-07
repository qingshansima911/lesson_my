<template>
    <div class="container">
        <div class="container_header">
            <div class="container_header__item">
                <img src="https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png">
                <div class="order">全部订单</div>
            </div>
            <div class="container_header__item">
                <img src="https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png">
                <div class="uncheck">待付款</div>
            </div>
            <div class="container_header__item">
                <img src="https://s.yezgea02.com/1604041127880/9.9%402x.png">
                <div class="untrip">未出行</div>
            </div>
            <div class="container_header__item">
                <img src="https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png">
                <div class="uncomment">待评论</div>
            </div>
        </div>
        <div class="container_center">
            <div class="container_center__item">
                <div class="num">0</div>
                <div class="collection">我的收藏</div>
            </div>
            <div class="container_center__item">
                <div class="num">24</div>
                <div class="browsing-history">浏览历史</div>
            </div>
            <div class="container_center__item">
                <div class="num">0</div>
                <div class="score">积分</div>
            </div>
            <div class="container_center__item">
                <div class="num">0</div>
                <div class="coupon">优惠券</div>
            </div>
        </div>
        <div class="container_wallet">
            <div class="container_wallet__top">
                <div class="wallet">钱包</div>
                <div class="cash">礼品卡·现金 ></div>
            </div>
            <div class="container_wallet__bottom">
                <div class="container_wallet__item">
                    <div class="num">1.08万</div>
                    <div class="text">财富赚钱</div>
                    <div class="text2">新人体验金</div>
                </div>
                <div class="container_wallet__item">
                    <div class="num">1026券</div>
                    <div class="text">拿去花</div>
                    <div class="text2">先享后负</div>
                </div>
                <div class="container_wallet__item">
                    <div class="num">20万</div>
                    <div class="text">信用贷</div>
                    <div class="text2">最高可借</div>
                </div>
                <div class="container_wallet__item">
                    <div class="num">1.8万</div>
                    <div class="text">白金卡</div>
                    <div class="text2">预估额度</div>
                </div>
            </div>
        </div>
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
        <div class="container_square">
            <div class="container_square__top">
                <div class="square">活动广场</div>
                <div class="more">更多 ></div>
            </div>
            <div class="container_square__bottom">
                <div class="container_square__item">
                    <i class="iconfont icon-qiapai"></i>
                    <div class="text">打牌领话费</div>
                </div>
                <div class="container_square__item">
                    <i class="iconfont icon-liwu"></i>
                    <div class="text">领福利</div>
                </div>
                <div class="container_square__item">
                    <i class="iconfont icon-hongbao"></i>
                    <div class="text">现金红包</div>
                </div>
                <div class="container_square__item">
                    <i class="iconfont icon-chongzhi"></i>
                    <div class="text">手机充值</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.container
    padding 0 .3rem /* 10/37.5 */
    .container_header
        fj()
        padding 0.3rem .3rem
        background-color #fff
        border-radius  .266667rem
        .container_header__item
            fd()
            align-items center
            img
                wh(1rem,1rem)
    .container_center
        fj()
        margin .3rem 0
        padding .3rem 
        background-color #fff
        border-radius  .266667rem
        .container_center__item
            fd()
            align-items center
            .num
                font-weight 700
                font-size .36rem /* 15/37.5 */
    .container_wallet
        padding .3rem 
        background-color #fff
        border-radius  .266667rem
        .container_wallet__top
            fj()
            padding-bottom .3rem
            .wallet
                font-weight 700
                font-size .36rem /* 15/37.5 */
        .container_wallet__bottom
            fj()
            .container_wallet__item
                fd()
                align-items center
                .num 
                    font-weight 700
                    font-size .36rem /* 15/37.5 */
                    padding .1rem 0
                .text
                    font-weight 700
                    padding .1rem 0
    .container_tools     
        padding .3rem 
        background-color #fff
        border-radius  .266667rem
        margin .3rem 0
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
    .container_square
        padding .3rem 
        background-color #fff
        border-radius  .266667rem
        margin .3rem 0
        .container_square__top
            fj()
            padding-bottom .3rem
            .square
                font-weight 700
                font-size .36rem /* 15/37.5 */
        .container_square__bottom
            fj()
            .container_square__item
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