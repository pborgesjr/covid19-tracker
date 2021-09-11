import React from 'react';
import PropTypes from 'prop-types';

import CountryCard from '../CountryCard';

import { Container } from './styles';

const CountriesList = ({ pagedWorld }) => {
  return (
    <Container>
      {pagedWorld.map((country) => (
        <CountryCard key={country.country} countryData={country} />
      ))}
    </Container>
  );
};

CountriesList.propTypes = {
  pagedWorld: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CountriesList;
