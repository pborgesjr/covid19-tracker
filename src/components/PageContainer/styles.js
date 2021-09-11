import styled from 'styled-components';

import { PALETTE } from '~/theme';

export const Container = styled.div`
  display: ${(props) => (props.loading ? 'none' : 'flex')};
  justify-content: center;

  span {
    font-size: 2.4rem;
    color: ${PALETTE.neutral.white};
    padding: 0 10px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 4px;
  padding: 5px 10px;
`;

export const PageButton = styled.button`
  background: ${PALETTE.vividGreen};
  border-radius: 4px;
  border: 0;
`;
