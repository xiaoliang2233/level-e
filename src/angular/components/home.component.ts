
import { Component } from "@angular/core";
const VueAppComponent = require("../../vue/app.vue").default
const Vue = require("vue/dist/vue.js")

@Component({
  template: `
    <div class="angular">
      this is angular Component
      <div id="vue-mount-element"></div>
      <div id="j">hello {{msg}}</div>
      <button (click)="change()">戳这里!</button>
      <p>显示时间 {{getTime()}}</p>
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
    console.log("函数能执行, 但是不进行检测")
    this.msg = "😁";
    console.log(document.getElementById('j').innerText);
    setTimeout(_=>{
      console.log(this.msg);
    }, 1000)
  }
} 