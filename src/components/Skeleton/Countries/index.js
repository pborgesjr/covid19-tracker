import React from 'react';

import SkeletonCountryCard from '~/components/Skeleton/CountryCard';

import { Container } from './styles';

const SkeletonCountriesList = () => {
  return (
    <Container>
      <SkeletonCountryCard />
      <SkeletonCountryCard />
      <SkeletonCountryCard />
      <SkeletonCountryCard />
    </Container>
  );
};

export default SkeletonCountriesList;
