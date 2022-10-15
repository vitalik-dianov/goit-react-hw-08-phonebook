import { AuthLink, AuthList } from './AuthBlock.styled';

export const AuthBlock = () => {
  return (
    <AuthList>
      <li>
        <AuthLink to="/login">Log in</AuthLink>
      </li>
      <li>
        <AuthLink to="/register">Register</AuthLink>
      </li>
    </AuthList>
  );
};
