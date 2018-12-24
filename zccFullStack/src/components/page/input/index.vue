<template>
  <div>
    <div>
      <el-button @click="Reset">重置示例1</el-button>
      <el-button type="primary" @click="InputDisabled">示例1禁止输入</el-button>
      <el-button type="primary" @click="InputDisabledClear">示例1禁止输入并清空输入值</el-button>
      <div>
        <el-input class="width100"
                  placeholder="示例1"
                  v-model="input.one"
                  :disabled="disabled.one"
        >
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data: () => ({
      value: "",
      input: {one: "", two: "",three: "", },
      disabled: { one: false, two: false, three: false, },
      options: [{ value: 'one',  label: "禁止示例1"},
        {value: 'two',label: "禁止示例2"},
        {value: 'three',label: "禁止示例3"},
        {value: 'reset', label: "重置" }]
    }),
    watch: {
      value: {
        handler(newValue, oldValue) {
          let _this =this;
          if(newValue==='reset'){
            //遍历置灰数组，将值全部置为false
            Object.keys(_this.disabled).forEach(function (i) {
              _this.disabled[i] = false
            });
            return
          }
          //将对应的置灰数组，置为true
            this.disabled[newValue]=true;
        }, deep: true,
      }
    },
    methods: {
      Reset() {
        this.disabled.one = false;
      },
      InputDisabled() {
        this.disabled.one = true;
      },
      InputDisabledClear() {
        this.disabled.one = true;
        //直接将值清空
        this.input.one = "";
      }
    },
    mounted() {
      for (let codePoint of 'foo') {
        console.log(codePoint)
      }
    },
  }
</script>

<style scoped>
  .width100 {
    width: 100px;
  }
</style>
