/**
 * User: Claudia Valdivieso
 * Date: 07/11/16
 */

import { trigger, style, transition, animate } from '@angular/animations';

export const modal = trigger('modal', [
    transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
    ]),
    transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
    ])
]);
