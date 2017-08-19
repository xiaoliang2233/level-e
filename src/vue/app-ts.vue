<template>
  <div>
    <h1>hello, {{msg}}</h1>
  </div>
</template>

<script lang="ts">
  import { Vue } from "vue";
  import Component from "./vue-class-component";

  @Component({
    
  })
  export default class AppForVue extend Vue {
    msg: string  = 'vue'
  }
</script>

<style scoped>
  h1,
  h2 {
    font-weight: normal;
    background-color: #ff8800;
  }

</style>
