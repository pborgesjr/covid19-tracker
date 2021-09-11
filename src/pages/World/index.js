import React, { useState, useMemo, useEffect } from 'react';
import Observer from '@researchgate/react-intersection-observer';

import { Input, CountriesList } from '~/components';
import { getWorldInfo } from '~/services';
import { formatString } from '~/utils';
import { getLocale } from '~/locale';

import { Container } from './styles';

const World = () => {
  const [page, setPage] = useState(1);
  const [world, setWorld] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');

  const { countryInputPlaceholder } = getLocale();

  const handleIntersection = ({ isIntersecting }) => {
    if (isIntersecting) {
      setTimeout(() => setPage(page + 1), 1000);
    }
  };

  /** fazer custom hook */
  const memoPagedWorld = useMemo(() => {
    if (input !== '') {
      setPage(1);
      return world.filter((country) =>
        country.country.includes(formatString(input))
      );
    }
    const offset = (Number(page) - 1) * 16;
    return world.slice(0, offset + 16);
  }, [page, input, world]);

  useEffect(() => {
    const loadWorld = async () => {
      setWorld(await getWorldInfo());
      setIsLoading(false);
    };

    loadWorld();
  }, []);

  return (
    <Container>
      <Input
        placeholder={countryInputPlaceholder}
        debounceTimeout={600}
        isLoading={isLoading}
        setValue={setInput}
      />
      <CountriesList pagedWorld={memoPagedWorld} isLoading={isLoading} />
      {!isLoading && memoPagedWorld.length !== world.length && (
        <Observer onChange={handleIntersection} threshold={1}>
          <span />
        </Observer>
      )}
    </Container>
  );
};

export default World;
