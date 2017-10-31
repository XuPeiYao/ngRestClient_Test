import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RestClientBuilder } from 'ng-restclient';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    RestClientBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
