// + ---------------------------- + First level imports + ----------------------------- + //
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { AppSecurityModule } from './Modules/app-security/app-security.module';
import { NavbarAndBiselsModule } from './Modules/navbar-and-bisels/navbar-and-bisels.module';
import { ViewPanelsModule } from './Modules/view-panels/view-panels.module';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
// + ---------------------------- + Thirds level imports + ---------------------------- + //
import {TabMenuModule} from 'primeng/tabmenu';

@NgModule({

  declarations: [
    AppComponent, HomeComponent, LoginComponent
  ],

  imports: [
    BrowserModule, AppRoutingModule, AppSecurityModule,
    NavbarAndBiselsModule, ViewPanelsModule, TabMenuModule
  ],

  providers: [],

  bootstrap: [AppComponent]

})
export class AppModule { }
