import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes:Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule { }
