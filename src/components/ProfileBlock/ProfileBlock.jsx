import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  // MenuItemOption,
  MenuGroup,
  // MenuOptionGroup,
  // MenuDivider,
  Button,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { authLogout } from 'redux/auth/operations';

export const ProfileBlock = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(authLogout())
    }
  return (
    <Menu>
      <MenuButton
        as={Button}
        p={0}
        color='yellowLight'
        backgroundColor="inherit"
        textTransform="uppercase"
        fontWeight='bold'
        _hover={{backgroundColor:'inherit'}}
        _active={{backgroundColor:'inherit'}}
      >
        Profile
      </MenuButton>
      <MenuList
        backgroundColor="gray.200"
        width={256}
        border={1}
        borderColor="black"
      >
        <MenuGroup title="Profile">
          <MenuItem>My Account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout </MenuItem>
        </MenuGroup>
        {/* <MenuDivider /> */}
        {/* <MenuGroup title='Help'>
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup> */}
      </MenuList>
    </Menu>
  );
};
