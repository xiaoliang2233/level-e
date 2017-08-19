import "rxjs";

import "core-js";

import "zone.js"

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";


import {AppModule} from "./angular/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);

if (module && module['hot']) {
  module['hot'].accept();
}
