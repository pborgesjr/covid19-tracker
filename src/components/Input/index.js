/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { MdSearch } from 'react-icons/md';
import { DebounceInput } from 'react-debounce-input';

import { PALETTE } from '~/theme';
import {
  setCitySearchInput,
  setCountrySearchInput,
} from '~/store/modules/application/actions';

import { Container } from './styles';

const Input = ({ placeholder, debounceTimeout }) => {
  const dispatch = useDispatch();

  function handleSearchInput(event) {
    if (placeholder.includes('município')) {
      dispatch(setCitySearchInput(event.target.value));
    } else {
      dispatch(setCountrySearchInput(event.target.value));
    }
  }

  return (
    <Container>
      <DebounceInput
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
