import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';

import { LogInComponent } from './components/log-in/log-in.component';
import { UserRouterModule } from './modules/user-router/user-router.module';
import { AuthService } from '../../services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireAuthModule,
    UserRouterModule
  ],
  providers: [
    AuthService
  ],
  declarations: [
    LogInComponent
  ]
})
export class UserModule { }
