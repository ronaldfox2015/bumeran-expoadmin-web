
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function rucValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    let no = false;
    if (control.value !== null && String(control.value) !== '') {
      no = !validator(String(control.value));
    }
    return no ? {'customRuc': true} : null;
  };
}

function validator(value) {
  let dig, dig_valid, dig_verif, dig_verif_aux, factor, flag_dig, i, item, j, narray, residuo, resta, suma;
  factor = '5432765432';

  if ( value.length !== 11 || !/^[0-9]+$/.test(value)) {
    return false;
  }
  dig_valid = [10, 20, 17, 15];
  dig = value.substr(0, 2);
  flag_dig = dig_valid.indexOf(parseInt(dig));
  if (flag_dig === -1) {
    return false;
  }
  dig_verif = value.substr(10, 1);
  narray = [];
  i = 0;
  while (i < 10) {
    item = value.substr(i, 1) * factor.substr(i, 1);
    narray.push(item);
    i++;
  }
  suma = 0;
  j = 0;
  while (j < narray.length) {
    suma = suma + narray[j];
    j++;
  }
  residuo = suma % 11;
  resta = 11 - residuo;
  dig_verif_aux = resta.toString().substr(-1);
  if (dig_verif === dig_verif_aux) {
    return true;
  } else {
    return false;
  }
}
