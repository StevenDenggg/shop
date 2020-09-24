<template>
    <section class="msite">
        <HeaderTop :title="address.name">
            <span class="header_search" slot="left">
                <i class="iconfont icon-search" style="color:white"></i>
            </span>
            <span class="header_login" slot="right">
                <span class="header_login_text">登录|注册</span>
            </span>
        </HeaderTop>
        <!--首页分类导航-->
        <nav class="msite_nav">
          <div v-if="foodTypesArr.length" class="swiper-container">
            <div class="swiper-wrapper">
              <div v-for="(foodTypes,index) in foodTypesArr" :key="index" class="swiper-slide">
                <a v-for="(foodType,index) in foodTypes" :key="index" href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img :src="baseImageUrl + foodType.image_url">
                  </div>
                  <span>{{foodType.title}}</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <img src="./images/msite_back.svg" alt="bg" v-else>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-option"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList></ShopList>
        </div>
    </section>
</template>

<script>
import {mapState} from "vuex"
import HeaderTop from "../../components/HeaderTop/HeaderTop"
import ShopList from "../../components/ShopList/ShopList"
import Swiper from "swiper/swiper-bundle.min.js"
import "swiper/swiper-bundle.min.css"

export default {
    data() {
        return {
            baseImageUrl: "https://fuss10.elemecdn.com"
        }
    },
    mounted () {
         
    },
    computed: {
        ...mapState(['address','foodTypes']), //利用对象展开符(...)将mapState函数的返回值(对象)融进computed属性里面
        foodTypesArr(){ //将一维数组整合成二维数组(内部数组的长度最大为8)
            let arr = []
            let minArr = []
            for(let foodType of this.foodTypes){
                minArr.push(foodType)
                if (minArr.length===8){
                    arr.push(minArr)
                    minArr = []
                }
            }
            if(minArr.length!==0){
                arr.push(minArr)
            }
            return arr
        }
    },
    watch: {
        foodTypes() { //监视state里的foodTypes数据，一旦有变化既有数据，还要等视图更新后才能用Swiper
            this.$nextTick(()=>{
                new Swiper(".swiper-container",{
                    loop:true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                })
            })
        }
    },
    components:{
        HeaderTop,
        ShopList
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../assets/stylus/mixins.styl"

.msite
    width 100%
    .msite_nav
        bottom-border-1px(#e4e4e4)
        margin-top 45px
        height 200px
        background #fff
        .swiper-container
            width 100%
            height 100%
            .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                    display flex
                    justify-content center
                    align-items flex-start
                    flex-wrap wrap
                    .link_to_food
                        width 25%
                        .food_container
                            display block
                            width 100%
                            text-align center
                            padding-bottom 10px
                            font-size 0
                            img
                                display inline-block
                                width 50px
                                height 50px
                        span
                            display block
                            width 100%
                            text-align center
                            font-size 13px
                            color #666
            .swiper-pagination
                >span.swiper-pagination-bullet-active
                    background #02a774
    .msite_shop_list
        top-border-1px(#e4e4e4)
        margin-top 10px
        background #fff
        .shop_header
            padding 10px 10px 0
            .icon-option
                font-size 15px
            .shop_icon
                margin-left 5px
                color #999
            .shop_header_title
                color #999
                font-size 14px
                line-height 20px

</style>