import axios from 'axios';

const URLs = {
  world: 'https://covid19-brazil-api.now.sh',
  cities: 'https://brasil.io/api/dataset/covid19/caso/data/?format=json',
};

const api = (key) =>
  axios.create({
    baseURL: URLs[key],
  });

export default api;
