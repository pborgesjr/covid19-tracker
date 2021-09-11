import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactLoading from 'react-loading';

import {
  FloatingButton,
  FloatingCities,
  BrasilTable,
  CountryCard,
} from '~/components';
import {
  getCountryInfoRequest,
  getBrazilInfoRequest,
} from '~/store/modules/application/actions';

import { Container } from './styles';

const Brasil = () => {
  const [isShowing, setIsShowing] = useState();
  const dispatch = useDispatch();
  const { loading, country, states_date } = useSelector(
    (state) => state.application
  );

  useEffect(() => {
    async function loadBrazil() {
      dispatch(getCountryInfoRequest('Brazil'));
      dispatch(getBrazilInfoRequest());
    }
    loadBrazil();
  }, [dispatch]);

  return (
    <Container loading={loading}>
      {loading ? (
        <ReactLoading type="spokes" color="#4FFA7B" height="10%" width="10%" />
      ) : (
        <>
          <CountryCard countryData={country} states_date={states_date} />
          <BrasilTable />
          <FloatingButton isShowing={isShowing} setIsShowing={setIsShowing} />
          <FloatingCities isShowing={isShowing} setIsShowing={setIsShowing} />
        </>
      )}
    </Container>
  );
};

export default Brasil;
