// + ---------------------------- + First level imports + ----------------------------- + //
import { Component, OnInit } from '@angular/core';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { MenuItem } from 'src/app/Common/Models/Interface/MenuItem.interface';
// + ---------------------------- + Thirds level imports + ---------------------------- + //

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {"name":"Acerca de nosotros","link":"./Acerca de nosotros","selected":true},
      {"name":"Servicios","link":"./Servicios","selected":false},
      {"name":"Noticias","link":"./Noticias","selected":false},
      {"name":"Contactenos","link":"./Contactenos","selected":false}
    ];
  }

  redirectToLink(itemLink:string):void{console.log(itemLink)}

}
