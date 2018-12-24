<template>
    <div>
        <v-sidebar  ></v-sidebar>
        <div class="content" :style="{height: (this.$store.state.bodyHeight-20) + 'px',overflow:'auto'}">
          <div></div>
            <transition name="move" mode="out-in">
                <!-- <keep-alive>-->
              <!--这里的router-view用来渲染子页面-->
                <router-view></router-view>
                <!-- </keep-alive>-->
            </transition>
        </div>
    </div>
</template>

<script>
  //引入侧导航组件
    import vSidebar from '../common/sideMenu.vue';
    export default {
        data() {
            return {}
        },
        components:{
          //注册侧导航组件
            vSidebar
        },
    }
</script>

<style scoped>

</style>
