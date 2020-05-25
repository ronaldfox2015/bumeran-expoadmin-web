/**
 * User: Claudia Valdivieso
 * Date: 07/11/16
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { modal } from "../../animations/modal";

@Component({
    selector: "comp-modal",
    templateUrl: "modal.component.html",
    styleUrls: ["modal.component.css"],
    animations: [
        modal
    ]
})

export class ModalComponent {
    @Input()
    closable = true;

    @Input()
    visible: boolean;

    @Output()
    visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    closeModal() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
}
