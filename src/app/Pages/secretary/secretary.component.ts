// + ---------------------------- + First level imports + ----------------------------- + //
import { Component, OnInit } from '@angular/core';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { MenuItem } from '../../Common/Models/Interface/MenuItem.interface';
// + ---------------------------- + Thirds level imports + ---------------------------- + //


@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.scss']
})
export class SecretaryComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit(): void {

    this.items = [
      {"name":"Registro","link":"./Registro","selected":true},
      {"name":"Citas","link":"./Citas","selected":false},
      {"name":"Facturas","link":"./Facturas","selected":false}
    ];

  }

}
