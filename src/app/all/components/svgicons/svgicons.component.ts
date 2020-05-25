import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comp-svgicons',
  templateUrl: './svgicons.component.html'
})
export class SvgiconsComponent implements OnInit {

  @Input() icon: any;
  svgClass: string;
  xlink: string;

  constructor() { }

  ngOnInit() {
    this.svgClass = 'g-icon ' + this.icon['name'];
    this.xlink = '/assets/svgicons/icons.svg#' + this.icon['name'];
  }

}
