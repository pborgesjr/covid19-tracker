const formatString = (searchValue) => {
  if (searchValue.length > 2) {
    return searchValue
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(' ');
  }
  return searchValue.toUpperCase();
};

export { formatString };
