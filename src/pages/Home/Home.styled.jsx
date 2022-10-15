import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: ${p => p.theme.space[32]};

  text-align: center;
  font-size: ${p => p.theme.fontSizes['6xl']};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.blueLight};
  margin-bottom: ${p => p.theme.space[36]};
`;
