import { AbstractControl, ValidatorFn } from '@angular/forms';

export function longitudeValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const LONGITUDE_REGEXP = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,7})?))$/g;

    if (control.value !== null && control.value !== '' && !LONGITUDE_REGEXP.test(control.value)) {
      return { 'longitudeFormat': true };
    }
    return null;
  };
}
