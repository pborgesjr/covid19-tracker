import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { formatDate } from '~/util';
import { api } from '~/services';

import {
  getCountryInfoSuccess,
  getWorldInfoSuccess,
  getBrazilInfoSuccess,
  getCitySuccess,
} from './actions';

export function* getCountry({ payload }) {
  try {
    const { name } = payload;
    /** API Call */
    const response = yield call(api('world').get, `/api/report/v1/${name}`);
    /** */

    const country = {
      ...response.data.data,
    };

    yield put(getCountryInfoSuccess(country));
  } catch (err) {
    toast.error('Falha ao recuperar informações do país!');
  }
}

export function* getWorld() {
  try {
    const response = yield call(api('world').get, '/api/report/v1/countries');
    yield put(getWorldInfoSuccess(response.data.data));
  } catch (err) {
    toast.error('Falha ao recuperar informações sobre do mundo!');
  }
}

export function* getBrazil() {
  try {
    /** API Call */
    const response = yield call(api('world').get, '/api/report/v1');
    /** */

    yield put(
      getBrazilInfoSuccess({
        brazil: response.data.data,
        states_date: formatDate(response.data.data[0].datetime, true),
      })
    );
  } catch (err) {
    toast.error('Falha ao recuperar informações do Brasil!');
  }
}

export function* getCity({ payload }) {
  try {
    const { citySearchInput } = payload;
    const response = yield call(api('cities').get, '', {
      params: {
        search: citySearchInput,
        is_last: 'True',
        place_type: 'city',
      },
    });

    if (response && response.data.count === 0) {
      toast.error('Por favor, digite o nome correto do município!');
    } else {
      yield put(getCitySuccess(response.data.results));
    }
  } catch (err) {
    toast.error('Erro ao buscar cidade, tente novamente em alguns instantes!');
  }
}

export default all([
  takeLatest('@application/COUNTRY_REQUEST', getCountry),
  takeLatest('@application/WORLD_REQUEST', getWorld),
  takeLatest('@application/BRAZIL_REQUEST', getBrazil),
  takeLatest('@application/CITY_REQUEST', getCity),
]);
