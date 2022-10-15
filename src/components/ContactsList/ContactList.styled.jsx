import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
`

export const ListItem = styled.li`
    display: flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom: ${p => p.theme.space[2]};
    &:last-child {
        margin-bottom:0;
    }
    /* gap: ${p => p.theme.space[5]}; */
    
`

export const Text = styled.p`
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes['xl']};
    color: ${p => p.theme.colors.blueLight};
    
    
`
export const DeleteBtn = styled.button`
    border: ${p => p.theme.borders["2px"]};
    border-radius: ${p => p.theme.radii.lg};
    border-color: ${p => p.theme.colors.blueLight};
    font-weight: ${p => p.theme.fontWeights.bold};
    background-color: ${p => p.theme.colors.blueLight};
    
    color: ${p => p.theme.colors.yellowLight};
    
    
    height: ${p => p.theme.sizes[9]};
    padding: 0 ${p => p.theme.space[2]};
    
    
    
`