import React from 'react';

import { getLocale } from '~/locale';
import Input from '../Input';
import CityCard from '../CityCard';
import SkeletonCityCard from '../Skeleton/CityCard';

import { Container, CustomCloseCircle } from './styles';

const FloatingCities = ({
  isShowing,
  setIsShowing,
  setValue,
  isLoading,
  cities,
}) => {
  const { countyInputPlaceholder } = getLocale();

  return (
    <Container isShowing={isShowing}>
      <div>
        <CustomCloseCircle onClick={() => setIsShowing(false)} />
      </div>

      <Input
        placeholder={countyInputPlaceholder}
        debounceTimeout={1000}
        setValue={setValue}
      />
      {isLoading && <SkeletonCityCard />}
      {!isLoading &&
        cities &&
        cities.map((city) => (
          <CityCard key={city.city_ibge_code} city={city} />
        ))}
    </Container>
  );
};

export default FloatingCities;
