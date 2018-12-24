<template>
  <div>
    <div v-infinite-scroll="loadMore"
         infinite-scroll-disabled="isMoreLoading"
         :infinite-scroll-immediate-check="true"
         infinite-scroll-distance="10">

      <mt-cell :title="i.name" v-for="(i,index) in list" :key="index">{{i.value}}</mt-cell>
    </div>

  </div>
</template>

<script>
  // 引入全部组件
  import Mint from 'mint-ui';
  import 'mint-ui/lib/style.css';
  Vue.use(Mint);
  import {Loadmore} from 'mint-ui';
  import Vue from 'vue'
  export default {
    components: {
      'v-loadmore': Loadmore,
    },
    data: () => ({
      /**------下拉刷新变量-------**/
      pageNo: 1,
      pageSize: 15,
      isLoading: false, // 加载中转菊花
      isMoreLoading: true, // 加载更多中
      noMore: false, // 是否还有更多
      list:[{"name":"客户","value":12},],
    }),
    mounted() {
    },
    methods: {
      /*---------------------------下拉刷新的方法------------------------------**/
      loadMore() { // 加载更多
        this.pageInfo.page += 1 // 增加分页
        this.isMoreLoading = true // 设置加载更多中
        this.isLoading = true // 加载中
        console.log(this.pageInfo.page, this.pageInfo.totalPage)
        if (this.pageNo > this.pageInfo.totalPage) { // 超过了分页
          this.noMore = true // 显示没有更多了
          this.isLoading = false // 关闭加载中
          return false
        }
        // 做个缓冲
        setTimeout(() => {
          this.getgetDriverMenu('loadMore', "true")
        }, 100)
      },
    },
  }
</script>

<style scoped>

</style>
