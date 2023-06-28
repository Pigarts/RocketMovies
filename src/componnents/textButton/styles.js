import styled from "styled-components"

export const Container = styled.button`
width: fit-content;
height: auto;   
border: none;
background: none;
color: ${({theme, isActive}) => isActive ? theme.COLORS.ORANGE : theme.COLORS.COLOR_1};

font-size: 16px;

&:disabled {
    opacity: .5;
}


`