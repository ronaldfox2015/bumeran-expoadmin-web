
import {AbstractControl , ValidatorFn} from '@angular/forms';

export function coordinateValidator(longitude: string, latitude: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const FULL = 1;
    const EMPTY = 0;
    let longitud, latitud, longError, latError, newLatError, newLongError, newLatSuccess, newLongSuccess;
    longitud = control.get(longitude).value.length > 0 ? FULL : EMPTY;
    latitud = control.get(latitude).value.length > 0 ? FULL : EMPTY;
    longError = control.get(longitude).errors ? control.get(longitude).errors : {};
    latError = control.get(latitude).errors ? control.get(latitude).errors : {};

    newLatSuccess = Object.assign(Object.assign({}, latError), {dependentAttributeLatitud: false});
    newLongSuccess = Object.assign(Object.assign({}, longError), {dependentAttributeLongitud: false});
    newLatError = Object.assign(Object.assign({}, latError), {dependentAttributeLatitud: true});
    newLongError = Object.assign(Object.assign({}, longError), {dependentAttributeLongitud: true});

    // TODO: Refactorizar validación
    if (longitud !== latitud) {
      if (latitud === 1) {
        control.get(longitude).setErrors(newLongError);
        control.get(latitude).setErrors(newLatSuccess);
      } else {
        control.get(latitude).setErrors(newLatError);
        control.get(longitude).setErrors(newLongSuccess);
      }
    } else {
      control.get(latitude).setErrors(newLatSuccess);
      control.get(longitude).setErrors(newLongSuccess);
    }

    return null;
  };
}
