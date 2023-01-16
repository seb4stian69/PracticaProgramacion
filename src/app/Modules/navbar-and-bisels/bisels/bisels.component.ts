// + ---------------------------- + First level imports + ----------------------------- + //
import { Component, Input, OnInit } from '@angular/core';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { MenuItem } from 'src/app/Common/Models/Interface/MenuItem.interface';
// + ---------------------------- + Thirds level imports + ---------------------------- + //

@Component({
  selector: 'app-bisels',
  templateUrl: './bisels.component.html',
  styleUrls: ['./bisels.component.scss']
})
export class BiselsComponent implements OnInit{

  // Estilos via codigo
  styles_navbar: object = {
    "justify-content": "start",
    "margin-left": "18.4em",
    "margin-top": "-5.5em",
  };

  styles_p: object = {
    "font-size": "22px"
  };

  // Atributos de clase
  @Input() items:MenuItem[] = [];
  status: string[] = ["Disponible", "No Disponible"];
  nowStatus: boolean = true;
  user = {
    name: "Sebastian",
    lastname: "Santis"
  }

  // Constructor
  constructor() {/*void*/}

  // Al iniciar
  ngOnInit(): void {/*void*/}

  // Metodos personalizados
  changeStatus():void{this.nowStatus = !this.nowStatus}

  redirectToLink(link:string):void{
    console.log(link)
  }

}
