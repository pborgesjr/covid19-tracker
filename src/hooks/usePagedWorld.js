import { useMemo } from 'react';

import { formatString } from '~/utils';

const usePagedWorld = (page, input, world, setPage) =>
  useMemo(() => {
    if (input !== '') {
      setPage(1);
      return world.filter((country) =>
        country.country.includes(formatString(input))
      );
    }
    const offset = (Number(page) - 1) * 16;
    return world.slice(0, offset + 16);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, input, world]);

export default usePagedWorld;
