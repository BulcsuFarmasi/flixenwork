import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { RoutingModule } from './modules/routing/routing.module';

const firebaseOptions = { 
    apiKey: "AIzaSyBMZcE9iMzFDY7yabTBqEdiAt-tiQTAOmY",
    authDomain: "flixenwork.firebaseapp.com",
    databaseURL: "https://flixenwork.firebaseio.com",
    projectId: "flixenwork",
    storageBucket: "flixenwork.appspot.com",
    messagingSenderId: "364043319613"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseOptions),
    UserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
