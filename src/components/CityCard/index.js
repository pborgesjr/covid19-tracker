import React from 'react';

import { formatDate } from '~/utils';
import { getLocale } from '~/locale';

import { Container, Top, Middle } from './styles';

const CityCard = ({ city }) => {
  const { confirmedCases, state, lastUpdate, deathCount } = getLocale();

  return (
    <Container>
      <Top>
        <span>{city.city}</span>
      </Top>
      <Middle>
        <div>
          <span>{confirmedCases}</span>
          <span>{city.confirmed}</span>
        </div>
        <div>
          <span>{deathCount}</span>
          <span>{city.deaths}</span>
        </div>
        <div>
          <span>{state}</span>
          <span>{city.state}</span>
        </div>
        <div>
          <span>{lastUpdate}</span>
          <span>{formatDate(city.date)}</span>
        </div>
      </Middle>
    </Container>
  );
};

export default CityCard;
