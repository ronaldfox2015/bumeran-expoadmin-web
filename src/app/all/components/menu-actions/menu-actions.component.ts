import { Component, ElementRef, Renderer, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector   : 'comp-menu-actions',
    templateUrl: 'menu-actions.component.html',
    styleUrls  : ['menu-actions.component.css']
})
export class MenuActionsComponent {
    flagClass: boolean;
    displayClass: string;
    icon: string[] = ['g-icon-three_nuts'];

    @Output() functionConnector;
    @Input() menuItems: any[];
    @Input() isDisabled: boolean;

    constructor(private el: ElementRef, private renderer: Renderer) {
        this.flagClass = false;
        this.isDisabled = this.isDisabled || false;
        this.functionConnector = new EventEmitter<number>();

        renderer.listenGlobal('document', 'click', (event) => {
            if (el.nativeElement !== event.target && !el.nativeElement.contains(event.target)) {
                this.flagClass = false;
                this.displayClass = '';
            }
        });
    }

    callFunction(key) {
        this.functionConnector.emit(key);
    }

    toggleClass() {
        this.flagClass = !this.flagClass;
        this.displayClass = this.flagClass ? 'is-active' : '';
    }

}
