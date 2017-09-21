<template>
  <div class="jj">
    <h1>hello, {{msg}}</h1>
    <p>显示时间 {{hello()}}</p>
    <button @click="change()">戳我!</button>
  </div>
</template>

<script>
  export default {
    name: 'VueAppComponent',
    data() {
      return {
        msg: "vue"
      }
    },
    methods : {
      hello(){
        return (new Date()).toString();
      },
      change(){
        this.msg = "😁";
      }
    },
    mounted(){
      console.log(this);
    }
  }
</script>

<style scoped>
  .jj{
    border: 1px solid darkgreen;
    margin:10px;
  }
</style>
