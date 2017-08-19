
import { Component } from "@angular/core";
// does not work , undefined
import Vue from 'vue'
const VueAppComponent = require("../../vue/app.vue")
const Vue1 = require("vue/dist/vue.js")
@Component({
  template: `<div id="vue-mount-element"></div>`,
})

export class HomeComponent {
  constructor() {
  }

  ngAfterContentInit() {

  }
  ngAfterViewInit() {
    console.log(Vue); // undefined
    console.log(Vue1);
    let vm = new Vue1(VueAppComponent);
    vm.$mount("#vue-mount-element")
  }
} 