import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyASg2b9NQ0cyvT8Oe92IlVgKF9LpKT0nEA",
  authDomain: "universe-1490765561619.firebaseapp.com",
  databaseURL: "https://universe-1490765561619.firebaseio.com",
  projectId: "universe-1490765561619",
  storageBucket: "universe-1490765561619.appspot.com",
  messagingSenderId: "1043952116464"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
