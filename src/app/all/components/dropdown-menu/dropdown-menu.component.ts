import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector   : '.c-dropdown',
  templateUrl: 'dropdown-menu.component.html',
  styleUrls  : ['dropdown-menu.component.css']
})
export class DropdownMenuComponent {
  @Input() menuItems: any[];
  @Output() functionConnector;

  constructor() {
    this.functionConnector = new EventEmitter<number>();
  };

  callFunction(key) {
    this.functionConnector.emit(key);
  }
}
