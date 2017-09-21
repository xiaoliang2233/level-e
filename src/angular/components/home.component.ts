
import { Component } from "@angular/core";
const VueAppComponent = require("../../vue/app.vue").default
const Vue = require("vue/dist/vue.js")

@Component({
  template: `
    <div class="angular">
      <h1>this is angular Component</h1>
      <div id="vue-mount-element"></div>
      <div id="j">hello {{msg}}</div>
      <button (click)="change()">戳这里!</button>
      <p>显示时间 {{getTime()}}</p>
      <p>{{msg2}}</p>
    </div>
`,
  styles:[
    `
      .angular{
        border: 1px solid #ff8800;
      }
    `
  ]
})

export class HomeComponent {
  msg = "angular";
  msg2 = "hello";
  getTime(){
    return (new Date()).toString();
  }
  ngAfterViewInit() {
    // let vm1 = new Vue({
    //   el: '#vue-mount-element',
    //   template: "<vue-app-component/>",
    //   components: {VueAppComponent}
    // })

    const app = new Vue(VueAppComponent)
    app.$mount("#vue-mount-element")
  }

  change(){
    this.msg = "😁";
    console.log(this);
  }
} 