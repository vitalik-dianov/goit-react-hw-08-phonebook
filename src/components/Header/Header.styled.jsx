import styled from 'styled-components';

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.blueLight};
  height: ${p => p.theme.sizes[16]};
`;
