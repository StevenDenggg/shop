<template>
    <div class="star" :class='"star-"+size'>
        <span v-for="(starClass,index) in starClasses" :key="index" class="star-item" :class="starClass"></span>
    </div>
</template>

<script>
export default {
    props:['score','size'],
    computed: {
        starClasses() { //根据score得到类名数组(如['on','on','on','half','off'])
            let arr = []
            let score = this.score
            let ons = Math.floor(score)
            for(let i=0;i<ons;i++){
                arr.push("on")
            }
            if(score-ons>=0.5){
                arr.push("half")
            }
            while(arr.length<5){arr.push("off")}
            return arr
        }
    },
}
</script>

<style lang="stylus" scoped>
@import "../../assets/stylus/mixins.styl"

.star //2x图 3x图
    float left
    font-size 0
    .star-item
        display inline-block
        background-repeat no-repeat
    &.star-48
        .star-item
            width 20px
            height 20px
            margin-right 22px
            background-size 20px 20px
            &:last-child
                margin-right: 0
            &.on
                bg-image('./images/star48_on')
            &.half
                bg-image('./images/star48_half')
            &.off
                bg-image('./images/star48_off')
    &.star-36
        .star-item
            width 15px
            height 15px
            margin-right 6px
            background-size 15px 15px
            &:last-child
                margin-right 0
            &.on
                bg-image('./images/star36_on')
            &.half
                bg-image('./images/star36_half')
            &.off
                bg-image('./images/star36_off')
    &.star-24
        .star-item
            width 10px
            height 10px
            margin-right 3px
            background-size 10px 10px
            &:last-child
                margin-right 0
            &.on
                bg-image('./images/star24_on')
            &.half
                bg-image('./images/star24_half')
            &.off
                bg-image('./images/star24_off')
</style>