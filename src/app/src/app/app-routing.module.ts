import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './components/Authentication/login/login.module#LoginModule'

  },
  {
    path: 'register',
    loadChildren: './components/Authentication/register/register.module#RegisterModule'
  },
  {
    path: 'dashboard',
    loadChildren: './components/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'users',
    loadChildren: './components/users/users.module#UsersModule'
  },
  { path: "**", redirectTo: "" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
