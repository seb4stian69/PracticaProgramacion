// + ---------------------------- + First level imports + ----------------------------- + //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { LoginFormComponent } from './login-form/login-form.component';
// + ---------------------------- + Thirds level imports + ---------------------------- + //

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports:[
    LoginFormComponent
  ]
})
export class ViewPanelsModule { }
