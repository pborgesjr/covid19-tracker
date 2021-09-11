import { toast } from 'react-toastify';

import { getLocale } from '~/locale';
import { formatDate } from '~/util';
import { BRASIL_IO_API_TOKEN } from '~/constants';

import axiosConfig from './axiosConfig';

export const getWorldInfo = async () => {
  const { errorFetchingWorldData } = getLocale();
  try {
    const { data } = await axiosConfig('world').get('/api/report/v1/countries');

    return data.data;
  } catch (e) {
    toast.error(errorFetchingWorldData);
    return undefined;
  }
};

export const getCountryInfo = async (name) => {
  const { errorFetchingCountryData } = getLocale();
  try {
    const { data } = await axiosConfig('world').get(`/api/report/v1/${name}`);

    return data.data;
  } catch (e) {
    toast.error(errorFetchingCountryData);
    return undefined;
  }
};

export const getBrazilStatesInfo = async () => {
  const { errorFetchingBrazilData } = getLocale();
  try {
    const { data } = await axiosConfig('world').get('/api/report/v1');

    return {
      brazil: data.data,
      date: formatDate(data.data[0].datetime),
    };
  } catch (e) {
    toast.error(errorFetchingBrazilData);
    return undefined;
  }
};

export const getCityInfo = async (name) => {
  const { errorFetchingCityData } = getLocale();

  try {
    const { data } = await axiosConfig('cities').get('', {
      headers: {
        'Authorization': `Token ${BRASIL_IO_API_TOKEN}`,
      },
      params: {
        search: name,
        is_last: 'True',
        place_type: 'city',
      },
    });

    return data.results;
  } catch (e) {
    toast.error(errorFetchingCityData);
  }
};
