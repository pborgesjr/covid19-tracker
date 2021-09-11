import styled from 'styled-components';

import { PALETTE } from '~/theme';

export const Container = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  max-height: 550px;

  @media (min-width: 800px) {
    overflow-y: scroll;
    margin-left: 25px;

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: ${PALETTE.neutral.darkGrey};
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${PALETTE.neutral.grey};
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${PALETTE.neutral.lightGrey};
    }
  }

  table {
    width: 100%;
    position: relative;
    border-collapse: collapse;

    tr {
      height: 44px;
    }

    thead {
      th:nth-child(1) {
        padding-left: 10px;
      }

      th {
        background: ${PALETTE.neutral.grey};
        color: ${PALETTE.neutral.white};
        font-weight: normal;
        text-align: left;
        font-size: 20px;
        position: sticky;
        top: 0;
        left: 0;

        @media (max-width: 800px) {
          top: 135px;
        }

        @media (max-width: 500px) {
          top: 75px;
        }
      }
    }

    tbody {
      td {
        color: ${PALETTE.neutral.white};
        font-size: 20px;
        padding-left: 10px;
      }

      tr:nth-child(even) {
        background: ${PALETTE.opacity.grey005};
      }
    }
  }
`;
