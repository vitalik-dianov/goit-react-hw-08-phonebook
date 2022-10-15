import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderNavList = styled.ul`
  list-style: none;
  display: flex;
  gap: ${p => p.theme.space[7]};
`;
export const HeaderNavLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.yellowLight};
`;
