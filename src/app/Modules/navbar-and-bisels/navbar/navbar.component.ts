// + ---------------------------- + First level imports + ----------------------------- + //
import { Component, Input, Output, EventEmitter } from '@angular/core';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { MenuItem } from 'src/app/Common/Models/Interface/MenuItem.interface';
// + ---------------------------- + Thirds level imports + ---------------------------- + //

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent{

  @Input()  items: MenuItem[] = [];
  @Output() linkEmitter:EventEmitter<string> = new EventEmitter<string>();

  sendLinkToParent(link:string):void{ this.linkEmitter.emit(link) }

  changeEmphasis(itemReceive:MenuItem):void{

    this.items.forEach(item=>{
      if(item.selected){item.selected = false}
      if(item.name == itemReceive.name){item.selected = true}
    });

  }

}

