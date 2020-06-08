import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { FaCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

import {
  Container,
  SmallContainer,
  CountryContainer,
  GraphicContainer,
  CasesContainer,
  Legend,
  Left,
  BottomContainer,
} from './styles';

export default function CountryCard({ countryData, states_date }) {
  const data = {
    labels: ['mortes', 'recuperados', 'casos ativos'],
    datasets: [
      {
        data: [countryData.deaths, countryData.recovered, countryData.cases],
        backgroundColor: ['#BA8686', '#4FFA7B', '#FFE500'],
        hoverBackgroundColor: ['#8a6365', '#33a350', '#b09e00'],
      },
    ],
  };

  return (
    <Container>
      <SmallContainer>
        <CountryContainer>
          {countryData.country === 'Brazil' && (
            <img
              src="https://www.countryflags.io/br/flat/48.png"
              alt="country_flag"
            />
          )}

          <span>{countryData.country}</span>
        </CountryContainer>
        <GraphicContainer>
          <Doughnut
            legend={{ display: false }}
            data={data}
            options={{ maintainAspectRatio: false }}
          />
        </GraphicContainer>
      </SmallContainer>
      <CasesContainer>
        <Legend>
          <Left>
            <FaCircle color="#FFE500" size={14} />
            <span>casos ativos</span>
          </Left>
          <span>{countryData.cases}</span>
        </Legend>

        <Legend>
          <Left>
            <FaCircle color="#4FFA7B" size={14} />
            <span>recuperados</span>
          </Left>
          <span>{countryData.recovered}</span>
        </Legend>

        <Legend>
          <Left>
            <FaCircle color="#BA8686" size={14} />
            <span>mortes</span>
          </Left>
          <span>{countryData.deaths}</span>
        </Legend>

        <Legend>
          <Left>
            <FaCircle color="#4d4d4d" size={14} />
            <span>total</span>
          </Left>
          <span>{countryData.confirmed}</span>
        </Legend>
      </CasesContainer>
      {countryData.country === 'Brazil' && (
        <BottomContainer>
          <span>atualização por estado</span>
          <span>{states_date}</span>
          <span>atualização geral</span>
          <span>{countryData.formatted_updated_at}</span>
        </BottomContainer>
      )}
    </Container>
  );
}

CountryCard.propTypes = {
  states_date: PropTypes.string,
};

CountryCard.defaultProps = {
  states_date: null,
};
