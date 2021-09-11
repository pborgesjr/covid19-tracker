import React from 'react';

import CountryCard from '../CountryCard';
import { SkeletonCountriesList } from '../Skeleton';

import { Container } from './styles';

const CountriesList = ({ pagedWorld, isLoading }) => {
  return isLoading ? (
    <SkeletonCountriesList />
  ) : (
    <Container>
      {pagedWorld.map((country) => (
        <CountryCard key={country.country} countryData={country} />
      ))}
    </Container>
  );
};

export default CountriesList;
