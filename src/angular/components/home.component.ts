
import { Component } from "@angular/core";
const VueAppComponent = require("../../vue/app.vue").default
const Vue = require("vue/dist/vue.js")

@Component({
  template: `<div id="vue-mount-element"></div>`,
})

export class HomeComponent {
  ngAfterViewInit() {
    // let vm1 = new Vue({
    //   el: '#vue-mount-element',
    //   template: "<vue-app-component/>",
    //   components: {VueAppComponent}
    // })

    const app = new Vue(VueAppComponent)
    app.$mount("#vue-mount-element")
  }
} 