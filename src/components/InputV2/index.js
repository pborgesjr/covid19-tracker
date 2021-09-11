import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

import { PALETTE } from '~/theme';
import { getCityRequest } from '~/store/modules/application/actions';

import { Container } from './styles';

const InputV2 = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  function handleInput(event) {
    setSearchInput(event.target.value);
  }

  function handleSearch() {
    dispatch(getCityRequest(searchInput));
  }

  return (
    <Container>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleInput}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleSearch();
          }
        }}
      />

      <MdSearch
        size={30}
        color={PALETTE.neutral.white}
        onClick={handleSearch}
      />
    </Container>
  );
};

export default InputV2;

/** Prop Types */
InputV2.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
