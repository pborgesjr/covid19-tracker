import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export const BrasilTable = () => {
  const { brazil } = useSelector((state) => state.application);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>uf</th>
            <th>casos</th>
            <th>suspeitos</th>
            <th>mortes</th>
          </tr>
        </thead>
        <tbody>
          {brazil.map((item) => (
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
