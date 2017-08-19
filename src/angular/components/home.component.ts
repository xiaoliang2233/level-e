
import { Component } from "@angular/core";
const VueAppComponent = require("../../vue/app.vue").default
const Vue = require("vue/dist/vue.js")

@Component({
  template: `<div id="vue-mount-element"></div>`,
})

export class HomeComponent {
  ngAfterViewInit() {
    console.log(VueAppComponent)
    let vm1 = new Vue({
      el: '#vue-mount-element',
      template: "<vue-app-component/>",
      components: {VueAppComponent}
    })
  }
} 