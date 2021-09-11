import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import {
  FloatingButton,
  FloatingCities,
  BrasilTable,
  CountryCard,
} from '~/components';
import { PALETTE } from '~/theme';
import { getBrazilStatesInfo, getCountryInfo, getCityInfo } from '~/services';

import { Container } from './styles';

const Brasil = () => {
  const [brazil, setBrazil] = useState([]);
  const [isShowing, setIsShowing] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');
  const [cities, setCities] = useState([]);
  const [isCityLoading, setIsCityLoading] = useState(false);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const loadCities = async () => {
      setIsCityLoading(true);
      setCities(await getCityInfo(input));
      setIsCityLoading(false);
    };
    if (input === '') {
      setCities([]);
    } else {
      loadCities();
    }
  }, [input]);

  useEffect(() => {
    const loadData = async () => {
      setBrazil(await getCountryInfo('brazil'));
      setStates(await getBrazilStatesInfo());
      setIsLoading(false);
    };

    loadData();
  }, []);

  return (
    <Container loading={isLoading}>
      {isLoading ? (
        <ReactLoading
          type="spokes"
          color={PALETTE.vividGreen}
          height="10%"
          width="10%"
        />
      ) : (
        <>
          <CountryCard countryData={brazil} states_date={states.date} />
          <BrasilTable states={states.brazil} />
          <FloatingButton isShowing={isShowing} setIsShowing={setIsShowing} />
          <FloatingCities
            isShowing={isShowing}
            setIsShowing={setIsShowing}
            setValue={setInput}
            isLoading={isCityLoading}
            cities={cities}
          />
        </>
      )}
    </Container>
  );
};

export default Brasil;
