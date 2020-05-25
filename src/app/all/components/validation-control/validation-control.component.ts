import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'comp-custom-validation',
  templateUrl: 'validation-control.component.html',
  styleUrls: ['validation-control.component.css']
})
export class ValidationControlComponent implements OnChanges {
  errorMessage = '';
  isErrors: boolean;

  @Input()
  errors: any;

  @Input()
  options: any;

  toggleShowErrors(options) {
    if (options.element.valid || (options.element.pristine && !options.submitted)){
      this.isErrors = false;
    }else {
      this.isErrors = true;
    }
  }

  ngOnChanges(changes: any): void {
    const errors: any = changes.options.currentValue.element.errors;
    this.errorMessage = '';
    this.toggleShowErrors(changes.options.currentValue);

    if (errors) {
      Object.keys(this.options.messages).some(key => {
        if (errors[key]) {
          this.errorMessage = this.options.messages[key];
          return true;
        }
      });
    }
  }
}
