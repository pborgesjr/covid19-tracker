import React from 'react';
import { MdSearch } from 'react-icons/md';
import { DebounceInput } from 'react-debounce-input';

import { PALETTE } from '~/theme';

import { Container } from './styles';

const Input = ({ placeholder, debounceTimeout = 0, isLoading, setValue }) => {
  const handleSearchInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <DebounceInput
        disabled={isLoading}
        type="text"
        debounceTimeout={debounceTimeout}
        placeholder={placeholder}
        onChange={handleSearchInput}
      />

      <MdSearch size={30} color={PALETTE.neutral.white} />
    </Container>
  );
};

export default Input;
