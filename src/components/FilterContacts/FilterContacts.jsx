import { useRef } from 'react';
import { Box } from 'utils/Box';
import { FilterInput, Title } from './FilterContacts.styled';

export const FilterContacts = ({ handleChange }) => {
  const filterRef = useRef();

  return (
    <label htmlFor="filter">
      <Box
        mr="auto"
        ml="auto"
        mb={10}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Title>Find contacts by name</Title>
        <FilterInput
          type="text"
          placeholder="Enter a name:"
          ref={filterRef}
          onChange={() => handleChange(filterRef.current.value)}
        />
      </Box>
    </label>
  );
};
