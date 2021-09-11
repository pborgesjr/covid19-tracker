import axios from 'axios';

const URLs = {
  world: 'https://covid19-brazil-api.now.sh',
  cities: 'https://api.brasil.io/dataset/covid19/caso/data/',
};

const axiosConfig = (key) =>
  axios.create({
    baseURL: URLs[key],
  });

export default axiosConfig;
