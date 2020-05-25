import { AbstractControl, ValidatorFn } from '@angular/forms';

export function latitudeValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const LATITUDE_REGEXP = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,7})?))$/g;

    if (control.value !== null && control.value !== '' && !LATITUDE_REGEXP.test(control.value)) {
      return { 'latitudeFormat': true };
    }
    return null;
  };
}
