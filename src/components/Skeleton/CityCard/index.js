import React from 'react';
import { Skeleton } from '@material-ui/lab';

import { Container } from './styles';

const SkeletonCityCard = () => {
  return (
    <Container>
      <Skeleton variant="rect" width={100} height={30} />
      <Skeleton variant="rect" width={300} height={30} />
      <Skeleton variant="rect" width={300} height={30} />
      <Skeleton variant="rect" width={300} height={30} />
      <Skeleton variant="rect" width={300} height={30} />
    </Container>
  );
};

export default SkeletonCityCard;
