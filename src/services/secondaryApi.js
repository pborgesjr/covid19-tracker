import axios from 'axios';

export const secondaryApi = axios.create({
  // baseURL: 'https://brasil.io/api/dataset/covid19',
  baseURL: 'https://brasil.io/api/dataset/covid19/caso/data/?format=json',
});
