import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector   : 'comp-sticky-nav',
  templateUrl: 'sticky-nav.component.html',
  styleUrls  : ['sticky-nav.component.css']
})

export class StickyNavComponent {

  @Input() options: Array<any>;
  colorDefault: string;
  colorActive: string;

  constructor() {
    this.colorDefault = '#378cc8';
    this.colorActive  = '#1E3D53';
  }

  // Obtiene la posicion del elemento indicado
  getElementOffset(elementId) {
    let docElement, box, top, left;
    docElement = document.documentElement;
    box        = document.getElementById(elementId).getBoundingClientRect();
    top        = box.top + window.pageYOffset - docElement.clientTop;
    left       = box.left + window.pageXOffset - docElement.clientLeft;
    return top - 200;
  }

  // Efecto de desplazamiento suave de los elementos
  smoothScroll(event, elementId) {
    let startY, stopY, distance;
    startY = window.pageYOffset;
    stopY  = this.getElementOffset(elementId) + 50;
    distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      scrollTo(0, stopY);
      return;
    }
    let speed;
    speed = 1500;
    if (speed >= 20) { speed = 20; }
    let step, leapY, timer;
    step  = Math.round(distance / 25);
    leapY = stopY > startY ? startY + step : startY - step;
    timer = 0;
    if (stopY > startY) {
      for ( let i = startY; i < stopY; i += step ) {
        setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
        leapY += step;
        if (leapY > stopY) {
          leapY = stopY;
        }
        timer++;
      }
      return;
    }
    for ( let i = startY; i > stopY; i -= step ) {
      setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
      leapY -= step;
      if (leapY < stopY) {
        leapY = stopY;
      }
      timer++;
    }
  }

  // Efecto de desplazamiento en los enlaces
  @HostListener('window:scroll', [])
  travelEffect() {
    let idElement: any;
    idElement = this.options.map((element) => element.rel);
    idElement.forEach((value, index) => {
      if (index !== idElement.length - 1) {
        if (scrollY >= this.getElementOffset(value) &&
            scrollY <= this.getElementOffset(idElement[index + 1]) ) {
          document.getElementById('optionSticky' + index).style.color = this.colorActive;
        }else {
          document.getElementById('optionSticky' + index).style.color = this.colorDefault;
        }
      }else {
        if (scrollY >= this.getElementOffset(value)) {
          document.getElementById('optionSticky' + index).style.color = this.colorActive;
        }else {
          document.getElementById('optionSticky' + index).style.color = this.colorDefault;
        }
      }
    });
  }

}
