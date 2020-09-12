<template>
    <div class="footer_guide">
        <a v-for="(item,index) in items" :key=index :class="{'guide_item':true, 'on':ActiveIndex==index}" @click="ChangeActive(index)">
            <span class="item_icon">
                <i :class="item.icon"></i>
            </span>
            <span>{{item.text}}</span>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ActiveIndex:0,
            items: [{
                text:"外卖",
                icon:"iconfont icon-waimai",
                path:"/msite"
            },
            {
                text:"搜索",
                icon:"iconfont icon-search",
                path:"/search"
            },
            {
                text:"订单",
                icon:"iconfont icon-dingdan-",
                path:"/order"
            },
            {
                text:"我的",
                icon:"iconfont icon-account",
                path:"/profile"
            }]
        }
    },
    methods: {
        ChangeActive(index) {
            this.ActiveIndex = index
            this.$router.replace(this.items[index].path)
        }
    },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
top-border-1px($color)
  position relative
  &::before
    content ''
    position absolute
    z-index 200
    left 0
    top 0
    width 100%
    height 1px
    background-color $color

.footer_guide {
    top-border-1px(#e4e4e4);
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 50px;
    display: flex;

    .guide_item {
        display: flex;
        flex: 1;
        text-align: center;
        flex-direction: column;
        align-items: center;
        margin: 5px;
        color: #999999;

        &.on {
            color: #02a774;
        }

        span {
            font-size: 12px;
            margin-top: 2px;
            margin-bottom: 2px;

            .iconfont {
                font-size: 22px;
            }
        }
    }
}
</style>