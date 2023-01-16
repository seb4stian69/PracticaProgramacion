// + ---------------------------- + First level imports + ----------------------------- + //
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { Users } from '../Common/Utils/Users.Mock';
import { User } from '../Common/Models/Interface/User.class';
// + ---------------------------- + Thirds level imports + ---------------------------- + //


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  userSession:User = {
    rol: sessionStorage.getItem('user'),
    username: sessionStorage.getItem('user'),
    password: sessionStorage.getItem('pass')
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree

  { return this.canPass() }

  canPass(): boolean{ return Users.some( user => JSON.stringify(this.userSession)===JSON.stringify(user) ) }

}
