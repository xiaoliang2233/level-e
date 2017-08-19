import { HomeComponent } from './components/home.component';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
]
export const routing =  RouterModule.forRoot(routes)