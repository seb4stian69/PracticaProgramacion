// + ---------------------------- + First level imports + ----------------------------- + //
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// + ---------------------------- + Second level imports + ---------------------------- + //
// + ---------------------------- + Thirds level imports + ---------------------------- + //


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private router: Router){}

  login(form: FormGroup):void{

    sessionStorage.setItem('user', form.value.user)
    sessionStorage.setItem('pass', form.value.pass)
    this.router.navigate([`/${sessionStorage.getItem('user')}`])
  }

}
