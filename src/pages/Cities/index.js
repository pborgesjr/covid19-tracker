import React from 'react';
import { useSelector } from 'react-redux';

import { InputV2, CityCard, SkeletonCityCard } from '~/components';
import { getLocale } from '~/locale';

import { Container } from './styles';

const Cities = () => {
  const { cities, cityLoading } = useSelector((state) => state.application);

  const { countyInputPlaceholder } = getLocale();

  return (
    <Container>
      <InputV2 placeholder={countyInputPlaceholder} />
      {cityLoading && <SkeletonCityCard />}
      {cities &&
        cities.map((city) => (
          <CityCard key={city.city_ibge_code} city={city} />
        ))}
    </Container>
  );
};

export default Cities;
