import { environment } from '../environments/environment';

export const URL_BASE: object = {
  fair: environment.urlFairServices,
  educationFair: environment.urlEducationFair,
  api: environment.urlApiPostulante
};

export const OPTIONS_NOTIFICATION = {
    position: ['top', 'right'],
    timeOut: 2000,
    maxStack: 4
};
