import styled from "styled-components";
import { Link } from "react-router-dom";


export const AuthList = styled.ul`
    list-style:none;
    display: flex;
    gap: ${p => p.theme.space[7]};
`
export const AuthLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.yellowLight};
    
    
`
