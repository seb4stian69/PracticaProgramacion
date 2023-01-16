// + ---------------------------- + First level imports + ----------------------------- + //
import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
// + ---------------------------- + Second level imports + ---------------------------- + //
// + ---------------------------- + Thirds level imports + ---------------------------- + //

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  formInicial: FormGroup;
  @Output() formEmmiter:EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(){
    this.formInicial = new FormGroup({
      user: new FormControl(),
      pass: new FormControl()
    })
  }

  onPressLogin():void{ this.formEmmiter.emit(this.formInicial) }

  onPressLoginWithGoogle():void{
    alert('you tried to login with google')
  }

}
