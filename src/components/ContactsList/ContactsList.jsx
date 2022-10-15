import { selectContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { DeleteBtn, List, ListItem, Text } from './ContactList.styled';
import { Box } from 'utils/Box';

export const ContactsList = ({ filter }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <List>
      {visibleContacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <Box display="flex" flexDirection="column">
              <Text>{`${contact.name} :`}</Text>
              <Text> {contact.number}</Text>
            </Box>
            <DeleteBtn
              type="button"
              onClick={() => {
                handleDelete(contact.id);
              }}
            >
              Delete
            </DeleteBtn>
          </ListItem>
        );
      })}
    </List>
  );
};
