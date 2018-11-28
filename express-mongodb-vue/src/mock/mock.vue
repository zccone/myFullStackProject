<template>
  <div>
    <pre>{{text }}</pre>
  </div>
</template>
<script>
  import Mock from 'mockjs';
  const Random = Mock.Random;
  Random.cname();
  Random.guid();
  Random.extend({
    sex:function(data){
      var arr=["男","女"]
      return this.pick(arr)
    }});


    export default {
  name:"detail",
  data:function(){
      return {
          text:"",
      }
  },
  methods:{
    mockInfo(){

      let data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-20': [{
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'uuid':'@guid()',
          'name' :'@cname()',
          'age|20-35' : 20,
          'sex' : "@sex",
        }]
      })
// 输出结果
      return data
    },
  },
  mounted:function(){
   this.text=JSON.stringify(this.mockInfo(), null, 4);
  }
}
</script>

<style scoped>
.detail{
    width: 80%;
    margin: 50px auto;
}
.imgClass{
    width: 100%;
}
.heroName{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
}
.goback{
    margin-bottom: 30px;
}
</style>


