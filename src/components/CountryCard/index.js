/* eslint-disable react/prop-types */
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { FaCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { formatDate } from '~/util';
import { getLocale } from '~/locale';

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

const CountryCard = ({ countryData, states_date }) => {
  const {
    deathCount,
    recoveredCount,
    activeCases,
    totalCount,
    updateAll,
    updatePerState,
  } = getLocale();

  const data = {
    labels: [deathCount, recoveredCount, activeCases],
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
            <span>{activeCases}</span>
          </Left>
          <span>{countryData.cases}</span>
        </Legend>

        <Legend>
          <Left>
            <FaCircle color="#4FFA7B" size={14} />
            <span>{recoveredCount}</span>
          </Left>
          <span>{countryData.recovered}</span>
        </Legend>

        <Legend>
          <Left>
            <FaCircle color="#BA8686" size={14} />
            <span>{deathCount}</span>
          </Left>
          <span>{countryData.deaths}</span>
        </Legend>

        <Legend>
          <Left>
            <FaCircle color="#4d4d4d" size={14} />
            <span>{totalCount}</span>
          </Left>
          <span>{countryData.confirmed}</span>
        </Legend>
      </CasesContainer>
      {countryData.country === 'Brazil' && states_date && (
        <BottomContainer>
          <span>{updatePerState}</span>
          <span>{states_date}</span>
          <span>{updateAll}</span>
          <span>{formatDate(countryData.updated_at, true)}</span>
        </BottomContainer>
      )}
    </Container>
  );
};

CountryCard.propTypes = {
  states_date: PropTypes.string,
};

CountryCard.defaultProps = {
  states_date: null,
};

export default CountryCard;
