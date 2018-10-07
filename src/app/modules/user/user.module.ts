import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireAuthModule } from '@angular/fire/auth';

import { LogInComponent } from './components/log-in/log-in.component';
import { UserRouterModule } from './modules/user-router/user-router.module';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    UserRouterModule
  ],
  declarations: [
    LogInComponent
  ]
})
export class UserModule { }
