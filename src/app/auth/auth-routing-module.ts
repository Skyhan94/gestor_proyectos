import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth } from './auth';
import { Login } from './login/login';

const routes: Routes = [
  {
    path: 'login', 
    component: Login
  },
  {
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
