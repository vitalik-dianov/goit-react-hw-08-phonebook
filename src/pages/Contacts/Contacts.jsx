import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/contacts/operations';

import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { useState } from 'react';
import { AddContactsForm } from 'components/AddContactsForm/AddContactsForm';
import { Box } from 'utils/Box';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const [filterValue, setFilterValue] = useState('');

  const updateFilterValue = value => {
    setFilterValue(value);
  };

  return (
    <Box
      // backgroundColor='orange.500'
      display="flex"
      justifyContent="space-between"
      pr={5}
      pl={5}
      mr="auto"
      ml="auto"
      width="100%"
      minWidth="2xs"
      maxWidth="6xl"
      // p={5}
      mt={14}
      gridGap={6}
    >
      <AddContactsForm />
      <Box
        border="1px"
        borderColor="blueLight"
        borderRadius="xl"
        backgroundColor="blue.50"
        width="100%"
        maxWidth="50%"
        p={5}
      >
        <FilterContacts handleChange={updateFilterValue} />
        <ContactsList filter={filterValue} />
      </Box>
    </Box>
  );
};
