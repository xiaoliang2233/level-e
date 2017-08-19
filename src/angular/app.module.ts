import { HomeComponent } from './components/home.component';
import { routing } from './app.router';
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
@NgModule({
  imports: [BrowserModule, routing],
  declarations: [AppComponent, HomeComponent],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}