// + ---------------------------- + First level imports + ----------------------------- + //
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent }from './Pages/home/home.component'
import { SecretaryComponent } from './Pages/secretary/secretary.component';
import { AuthGuard } from './Auth/auth.guard';
import { ClientComponent } from './Pages/client/client.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { ManagerComponent } from './Pages/manager/manager.component';
import { ProfessionalComponent } from './Pages/professional/professional.component';
// + ---------------------------- + Thirds level imports + ---------------------------- + //


const routes: Routes = [

  // This part not need to pass the control sessions guards

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
  },

  // This part need to pass the control sessions guards

  {
    path: 'client',
    component: ClientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'secretary',
    component: SecretaryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manager',
    component: ManagerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'professional',
    component: ProfessionalComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
