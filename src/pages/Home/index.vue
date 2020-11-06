// 首页组件

<template>
    <div class="home-content">
        <top-carousel></top-carousel>
        <school-dynamics></school-dynamics>
        <vedio-play></vedio-play>
        <blessing-school></blessing-school>
        <time-line></time-line>
    </div>
</template>
<script>
const TopCarousel = resolve => require(['./components/carousel.vue'], resolve)
const BlessingSchool = resolve => require(['./components/blessing.vue'], resolve)
const SchoolDynamics = resolve => require(['./components/dynamics.vue'], resolve)
const VedioPlay = resolve => require(['./components/vedioplay.vue'], resolve)
const TimeLine = resolve => require(['../../components/timeline'], resolve)
export default {
    name:'Home',
    components:{
        TopCarousel,
        BlessingSchool,
        SchoolDynamics,
        VedioPlay,
        TimeLine
    }
}
</script>

<style lang="less" scoped>

</style>