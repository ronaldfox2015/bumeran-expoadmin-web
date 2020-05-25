import { AbstractControl, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const EMAIL_REGEXP = /^[a-z0-9\_\-]+(\.?[a-z0-9\_\-]+)+@\w+([\.-]?\w+)+$/i;

        if (control.value !== null && control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value.trim()))) {
            return { 'emailFormat': true };
        }
        return null;
    };
}
