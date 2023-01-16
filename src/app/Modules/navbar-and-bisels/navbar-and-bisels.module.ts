// + ---------------------------- + First level imports + ----------------------------- + //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { NavbarComponent } from './navbar/navbar.component';
import { BiselsComponent } from './bisels/bisels.component';
// + ---------------------------- + Thirds level imports + ---------------------------- + //
import {DropdownModule} from 'primeng/dropdown';

@NgModule({

  declarations: [
    NavbarComponent, BiselsComponent,
  ],

  imports: [
    CommonModule, DropdownModule, BrowserAnimationsModule,
    BrowserModule
  ],

  exports:[
    NavbarComponent, BiselsComponent
  ]

})
export class NavbarAndBiselsModule { }
