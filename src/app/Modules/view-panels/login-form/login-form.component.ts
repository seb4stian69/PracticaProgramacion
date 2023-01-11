import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  onPressLogin():void{
    alert("you tried to connect")
  }

  onPressLoginWithGoogle():void{
    alert("you tried to connect with google account")
  }

}
