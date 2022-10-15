import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Box } from 'utils/Box';
import { AddBtn, AddFormInput, Title } from './AddContactsForm.styled';

export const AddContactsForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`Sorry, but ${data.name} is already in contacts`);
      return;
    } else {
      console.log(false);
    }
    dispatch(addContact(data));
    reset();
  };
  return (
    <Box 
    textAlign="center"
    border="1px"
        borderColor="blueLight"
        borderRadius="xl"
        backgroundColor="blue.50"
        width="100%"
        maxWidth="50%"
        p={5}
        // mb={10}
        >
          <Title>Add contacts to your phone book</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box 
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridGap={5}
        >

        <AddFormInput placeholder="Name" type="text" {...register('name')} />
        <AddFormInput
          placeholder="Number"
          type="number"
          {...register('number')}
          />
        <AddBtn type="submit" value="Add to phonebook" />
          </Box>
      </form>
    </Box>
  );
};
