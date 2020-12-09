import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageSigninComponent } from './pages/page-signin/page-signin.component';

const routes: Routes = [
  {
    path: 'login',
    component: PageSigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
