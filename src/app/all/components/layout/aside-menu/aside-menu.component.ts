import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-aside-menu',
  templateUrl: 'aside-menu.component.html',
  styleUrls: ['aside-menu.component.css']
})
export class AsideMenuComponent implements OnInit {
  titleSection = 'Gestión';
  links: any = [
    { url: '/empresas', icon: 'g-icon-building', label: 'Empresas'},
    { url: '/patrocinadores', icon: 'g-icon-people', label: 'Patrocinadores'}
  ];

  @Input()
  menu;

  ngOnInit(): void {
    if (this.menu) {
      this.titleSection = this.menu.titleSection;
      this.links = this.menu.links;
    }
  }
}
