<template>
  <div class="index">
    <div v-for="(item, key) in userList">
      {{item.name}}
      {{item.age}}
      {{item.sex}}
    </div>
  </div>
</template>

<script>

  export default {
    name: 'index',
    data () {
      return {
        userList: [],
      }
    },

    created() {
      this.getUserList();
    },
    methods:{
      getUserList: function() {
        this.$axios.get('/userList').then(res => {
            console.log(res);
            //将数据绑定在需要展示的data上就可以了
            this.userList=res.list
          });
      },
    }
  }
</script>
