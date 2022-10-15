import styled from 'styled-components';

export const RegisterInput = styled.input`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes['xl']};
  color: ${p => p.theme.colors.blueLight};
  border: 1px solid ${p => p.theme.colors.blueLight};
  border-radius: ${p => p.theme.radii.lg};
  padding: ${p => p.theme.space[2]};
  width: ${p => p.theme.sizes[96]};
`;
export const RegisterSubmit = styled.input`
  border: ${p => p.theme.borders['2px']};
  border-radius: ${p => p.theme.radii.lg};
  border-color: ${p => p.theme.colors.blueLight};
  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: ${p => p.theme.colors.blueLight};
  font-size: ${p => p.theme.fontSizes['2xl']};
  color: ${p => p.theme.colors.yellowLight};
  height: ${p => p.theme.sizes[12]};
  padding: 0 ${p => p.theme.space[16]};
`;
export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes['2xl']};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.blueLight};
  margin-bottom: ${p => p.theme.space[2]};
`;
