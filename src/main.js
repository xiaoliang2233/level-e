import Vue from "vue";
import VueAppComponent from "./vue/app.vue";
// import VueTsAppComponent from "./vue/app-ts.vue"

console.log(VueAppComponent)
const app = new Vue(VueAppComponent)
// const app = new Vue(VueTsAppComponent)
app.$mount("#app-for-vue")