import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { FaCircle } from 'react-icons/fa';

import { formatDate } from '~/utils';
import { getLocale } from '~/locale';
import { PALETTE } from '~/theme';

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
  const { deathCount, totalCount, updateAll, updatePerState } = getLocale();

  const data = {
    labels: [deathCount, totalCount],
    datasets: [
      {
        data: [countryData.deaths, countryData.confirmed],
        backgroundColor: [PALETTE.lightRed50, PALETTE.vividYellow],
        hoverBackgroundColor: [PALETTE.lightRed60, PALETTE.opaqueYellow],
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
            <FaCircle color={PALETTE.lightRed50} size={14} />
            <span>{deathCount}</span>
          </Left>
          <span>{countryData.deaths}</span>
        </Legend>

        <Legend>
          <Left>
            <FaCircle color={PALETTE.vividYellow} size={14} />
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

export default CountryCard;
