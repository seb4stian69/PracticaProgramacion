// + ---------------------------- + First level imports + ----------------------------- + //
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent }from './Pages/home/home.component'
// + ---------------------------- + Thirds level imports + ---------------------------- + //


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
