<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" unique-opened router collapse-transition>

            <template v-for="item in items"v-cloak >
                <template v-if="item.subset.length!==0">
                    <el-submenu :index="item.url" :key="item.url">
                        <template slot="title">
                            <!--<img :src="item.icon"  style="width: 20px;height: 20px"/>-->
                            <span slot="title">{{ item.name }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subset" :key="i" :index="subItem.url">
                            <!--<img :src="subItem.icon" style="width: 20px;height: 20px"/>-->
                            <span slot="title">{{ subItem.name }}</span>
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.url" :key="item.url">
                        <!--<img :src="item.icon" style="width: 20px;height: 20px"/>-->
                        <span slot="title">{{ item.name }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>

    </div>
</template>

<script>
    import bus from '../common/bus';
    import Vue from 'vue';

    export default {
        data() {
            return {
                collapse: false,
                items: []
            }
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        },
        mounted() {
            this.getmenu();
        },
        methods: {
            getmenu: function()  {
              console.log("this",this);
              this.$get("http://127.0.0.1:8080/api/sideMenu").then((response) => {
                if (response.code ==='success') {
                  this.items=response.data
                  // Vue.set(this,'items',response.data)
                  return
                }
              }, err => {
                console.log(err);
              });
            },
        }
    }
</script>

<style scoped>
  [v-cloak]{ display:none}
  .sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 0px;
    bottom: 0;
  }

  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 220px;
  }

  .sidebar > ul {
    height: 100%;
    overflow: auto;
  }
</style>
