import React, { useEffect, useState } from 'react';

import { Input, CityCard, SkeletonCityCard } from '~/components';
import { getLocale } from '~/locale';
import { getCityInfo } from '~/services';

import { Container } from './styles';

const Cities = () => {
  const [cities, setCities] = useState(undefined);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { countyInputPlaceholder } = getLocale();

  useEffect(() => {
    const loadCities = async () => {
      setIsLoading(true);
      setCities(await getCityInfo(input));
      setIsLoading(false);
    };

    loadCities();
  }, [input]);

  return (
    <Container>
      <Input
        placeholder={countyInputPlaceholder}
        setValue={setInput}
        isLoading={isLoading}
        debounceTimeout={1000}
      />
      {isLoading && <SkeletonCityCard />}
      {cities &&
        cities.map((city) => (
          <CityCard key={city.city_ibge_code} city={city} />
        ))}
    </Container>
  );
};

export default Cities;
