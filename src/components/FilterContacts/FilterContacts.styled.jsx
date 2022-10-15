import styled from 'styled-components';

export const FilterInput = styled.input`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes['xl']};
  color: ${p => p.theme.colors.blueLight};
  
  border: 1px solid ${p => p.theme.colors.blueLight};
    border-radius: ${p => p.theme.radii.lg};
    
  /* margin: 10px */
  padding: ${p => p.theme.space[2]};
  width: ${p => p.theme.sizes[96]};
`;
export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes['2xl']};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.blueLight};
  margin-bottom: ${p => p.theme.space[5]};
`;
