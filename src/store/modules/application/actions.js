export const getCountryInfoRequest = (name) => {
  return {
    type: '@application/COUNTRY_REQUEST',
    payload: { name },
  };
};

export const getCountryInfoSuccess = (data) => {
  return {
    type: '@application/COUNTRY_SUCCESS',
    payload: { data },
  };
};

export const getBrazilInfoRequest = () => {
  return {
    type: '@application/BRAZIL_REQUEST',
  };
};

export const getBrazilInfoSuccess = (data) => {
  return {
    type: '@application/BRAZIL_SUCCESS',
    payload: { data },
  };
};

export const getWorldInfoRequest = () => {
  return {
    type: '@application/WORLD_REQUEST',
  };
};

export const getWorldInfoSuccess = (data) => {
  return {
    type: '@application/WORLD_SUCCESS',
    payload: { data },
  };
};

export const setCountrySearchInput = (countrySearchInput) => {
  return {
    type: '@application/SET_COUNTRY_INPUT',
    payload: { countrySearchInput },
  };
};

export const setCitySearchInput = (citySearchInput) => {
  return {
    type: '@application/SET_CITY_INPUT',
    payload: { citySearchInput },
  };
};

export const getCityRequest = (citySearchInput) => {
  return {
    type: '@application/CITY_REQUEST',
    payload: { citySearchInput },
  };
};

export const getCitySuccess = (data) => {
  return {
    type: '@application/CITY_SUCCESS',
    payload: { data },
  };
};
