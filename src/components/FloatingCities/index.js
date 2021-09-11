import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import InputV2 from '../InputV2';
import CityCard from '../CityCard';
import SkeletonCityCard from '../Skeleton/CityCard';

import { Container, CustomCloseCircle } from './styles';

const FloatingCities = ({ isShowing, setIsShowing }) => {
  const { cities, cityLoading } = useSelector((state) => state.application);

  return (
    <Container isShowing={isShowing}>
      <div>
        <CustomCloseCircle onClick={() => setIsShowing(false)} />
      </div>

      <InputV2 placeholder="Digite o nome de um município" />
      {cityLoading && <SkeletonCityCard />}
      {cities &&
        cities.map((city) => (
          <CityCard key={city.city_ibge_code} city={city} />
        ))}
    </Container>
  );
};

export default FloatingCities;

/** Prop Types */
FloatingCities.propTypes = {
  isShowing: PropTypes.bool,
  setIsShowing: PropTypes.func.isRequired,
};

FloatingCities.defaultProps = {
  isShowing: undefined,
};
