import { get } from '~/storage';

import ptBR from './ptBR.json';
import en from './en.json';

export const getLocale = () => {
  const storageItem = 'locale';
  const currentLocale = get(storageItem);

  switch (currentLocale) {
    case 'ptBR':
      return ptBR;
    case 'en':
      return en;
    default:
      return ptBR;
  }
};
