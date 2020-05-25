import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationControlComponent } from './validation-control/validation-control.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { SvgiconsComponent } from 'app/all/components/svgicons/svgicons.component';
import { MenuActionsComponent } from 'app/all/components/menu-actions/menu-actions.component';
import { NotificationsService, SimpleNotificationsModule } from 'angular2-notifications';
import { ModalComponent } from 'app/all/components/modal/modal.component';
import { LoaderViewComponent } from 'app/all/components/loader-view/loader-view.component';
import { StickyNavComponent } from 'app/all/components/sticky-nav/sticky-nav.component';
import { InputFileDirective } from 'app/all/directives/input-file.directive';

@NgModule({
  imports: [
    CommonModule,
    SimpleNotificationsModule,
  ],
  declarations: [
    InputFileDirective,
    ValidationControlComponent,
    DropdownMenuComponent,
    SvgiconsComponent,
    MenuActionsComponent,
    ModalComponent,
    LoaderViewComponent,
    StickyNavComponent,
  ],
  providers: [
    NotificationsService
  ],
  exports: [
    InputFileDirective,
    ValidationControlComponent,
    DropdownMenuComponent,
    SvgiconsComponent,
    MenuActionsComponent,
    ModalComponent,
    SimpleNotificationsModule,
    LoaderViewComponent,
    StickyNavComponent
  ]
})
export class SharedModule { }
