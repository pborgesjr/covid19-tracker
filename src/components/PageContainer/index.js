import React from 'react';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { PALETTE } from '~/theme';

import { Container, InnerContainer, PageButton } from './styles';

const PageContainer = ({ setPage, page, length, loading }) => {
  return (
    <Container length={length} loading={loading}>
      {!loading && (
        <InnerContainer>
          <PageButton disabled={page === 1} onClick={() => setPage(page - 1)}>
            <MdChevronLeft size={30} color={PALETTE.neutral.white} />
          </PageButton>
          <span>{page}</span>
          <PageButton disabled={length < 10} onClick={() => setPage(page + 1)}>
            <MdChevronRight size={30} color={PALETTE.neutral.white} />
          </PageButton>
        </InnerContainer>
      )}
    </Container>
  );
};

PageContainer.propTypes = {
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  loading: PropTypes.number.isRequired,
};

export default PageContainer;
