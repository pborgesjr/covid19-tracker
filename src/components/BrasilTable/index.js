import React from 'react';

import { getLocale } from '~/locale';

import { Container } from './styles';

export const BrasilTable = ({ states }) => {
  const { federalUnit, casesCount, suspectsCount, deathCount } = getLocale();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>{federalUnit}</th>
            <th>{casesCount}</th>
            <th>{suspectsCount}</th>
            <th>{deathCount}</th>
          </tr>
        </thead>
        <tbody>
          {states.map((item) => (
            <tr key={item.uid}>
              <td>{item.state.toLowerCase()}</td>
              <td>{item.cases.toLocaleString()}</td>
              <td>{item.suspects.toLocaleString()}</td>
              <td>{item.deaths.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default BrasilTable;
