import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from '../../components/log-in/log-in.component';

export const userRoutes:Routes = [
  { path: 'log-in', component: LogInComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class UserRouterModuleModule { }
