// + ---------------------------- + First level imports + ----------------------------- + //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { NavbarComponent } from './navbar/navbar.component';
import { BiselsComponent } from './bisels/bisels.component';
// + ---------------------------- + Thirds level imports + ---------------------------- + //

@NgModule({

  declarations: [
    NavbarComponent, BiselsComponent,
  ],

  imports: [
    CommonModule
  ],

  exports:[
    NavbarComponent
  ]

})
export class NavbarAndBiselsModule { }
