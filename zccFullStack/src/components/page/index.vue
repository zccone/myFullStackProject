<template>
    <div>
        <v-sidebar  ></v-sidebar>
        <div class="content" >
            <transition name="move" mode="out-in">
                <!-- <keep-alive>-->
                <router-view></router-view>
                <!-- </keep-alive>-->
            </transition>
        </div>
    </div>
</template>

<script>
    import vSidebar from '../common/sideMenu.vue';
    export default {
        data() {
            return {}
        },
        components:{
            vSidebar
        },
        created(){
            // bus.$on('collapse', msg => {
            //     this.collapse = msg;
            // })
        },
        mounted() {
        },
        methods: {
        },

    }
</script>

<style scoped>

</style>
