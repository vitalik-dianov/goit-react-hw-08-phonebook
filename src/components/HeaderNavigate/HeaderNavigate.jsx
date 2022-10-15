import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { HeaderNavList, HeaderNavLink } from './HeaderNavigate.styled';

export const HeaderNavigate = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <HeaderNavList>
      <li>
        <HeaderNavLink to="/">Home</HeaderNavLink>
      </li>
      <li>
        {isLoggedIn && <HeaderNavLink to="/contacts">Contacts</HeaderNavLink>}
      </li>
    </HeaderNavList>
  );
};
