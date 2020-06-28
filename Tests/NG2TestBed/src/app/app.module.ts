import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import * as namespaces from '../clientapi/ClientApiAuto';
import MyClient = namespaces.MyNS.MyClient; 

export function myClientFactory(http: HttpClient) {
	return new namespaces.MyNS.MyClient('http://somewhere.com/', http);
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: namespaces.MyNS.MyClient,
      useFactory: myClientFactory,
      deps: [HttpClient],
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
