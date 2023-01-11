// + ---------------------------- + First level imports + ----------------------------- + //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { LoginFormComponent } from './login-form/login-form.component';
// + ---------------------------- + Thirds level imports + ---------------------------- + //

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginFormComponent
  ]
})
export class ViewPanelsModule { }
