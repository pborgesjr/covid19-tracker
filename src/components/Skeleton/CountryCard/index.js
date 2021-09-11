import React from 'react';
import { Skeleton } from '@material-ui/lab';

import { Container } from './styles';

const SkeletonCountryCard = () => {
  return (
    <Container>
      <Skeleton variant="circle" />
      <Skeleton variant="rect" width={200} height={100} />
      <Skeleton variant="rect" width={200} height={100} />
    </Container>
  );
};

export default SkeletonCountryCard;
