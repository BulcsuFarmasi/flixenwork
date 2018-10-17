import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';

import { NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { RoutingModule } from './modules/routing/routing.module';
import { firebaseOptions } from '../firebase-options';
import { HomeComponent } from './components/home/home.component';
import { ReduxService } from './services/redux/redux.service';
import { rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseOptions),
    NgReduxModule,
    UserModule,
    RoutingModule
  ],
  providers: [ ReduxService ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private reduxService:ReduxService) {
    this.reduxService.configureStore(rootReducer, INITIAL_STATE);
  }
}
