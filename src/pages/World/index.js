import React, { useState, useEffect } from 'react';
import Observer from '@researchgate/react-intersection-observer';

import { Input, CountriesList } from '~/components';
import { getWorldInfo } from '~/services';
import { getLocale } from '~/locale';
import { usePagedWorld } from '~/hooks';

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

  const memoPagedWorld = usePagedWorld(page, input, world, setPage);

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
