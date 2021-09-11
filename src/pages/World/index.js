import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Observer from '@researchgate/react-intersection-observer';

import { SkeletonCountriesList, Input, CountriesList } from '~/components';
import {
  getWorldInfoRequest,
  setCountrySearchInput,
} from '~/store/modules/application/actions';
import { formatString } from '~/util';

import { Container } from './styles';

const World = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { world, loading, countrySearchInput } = useSelector(
    (state) => state.application
  );

  useEffect(() => {
    async function loadCountriesData() {
      await dispatch(getWorldInfoRequest());
    }
    loadCountriesData();

    return () => {
      dispatch(setCountrySearchInput(''));
    };
  }, [dispatch]);

  const pagedWorld = useMemo(() => {
    if (countrySearchInput !== '') {
      setPage(1);
      return world.filter((country) =>
        country.country.includes(formatString(countrySearchInput))
      );
    }
    const offset = (Number(page) - 1) * 16;
    return world.slice(0, offset + 16);
  }, [page, countrySearchInput, world]);

  function handleIntersection({ isIntersecting }) {
    if (isIntersecting) {
      setTimeout(() => setPage(page + 1), 1000);
    }
  }

  return (
    <Container>
      {loading ? (
        <SkeletonCountriesList />
      ) : (
        <>
          <Input placeholder="Digite o nome de um país" debounceTimeout={600} />
          <CountriesList pagedWorld={pagedWorld} />
          {!loading && pagedWorld.length !== world.length && (
            <Observer onChange={handleIntersection} threshold={1}>
              <span />
            </Observer>
          )}
        </>
      )}
    </Container>
  );
};

export default World;
