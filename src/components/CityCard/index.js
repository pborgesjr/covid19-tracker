/* eslint-disable react/prop-types */
import React from 'react';

import { formatDate } from '~/util';

// import sp from '~/assets/SP.png';

import { Container, Top, Middle } from './styles';

const CityCard = ({ city }) => {
  return (
    <Container>
      <Top>
        <span>{city.city}</span>
      </Top>
      <Middle>
        <div>
          <span>casos confirmados</span>
          <span>{city.confirmed}</span>
        </div>
        <div>
          <span>mortes</span>
          <span>{city.deaths}</span>
        </div>
        <div>
          <span>estado</span>
          <span>{city.state}</span>
        </div>
        <div>
          <span>última atualização</span>
          <span>{formatDate(city.date)}</span>
        </div>
      </Middle>
    </Container>
  );
};

export default CityCard;
