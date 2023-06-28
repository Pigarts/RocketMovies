import  styled  from "styled-components";

export const Container = styled.span`
padding: 5px 14px;
font-size: 12px;
border-radius: 5px;
margin-right: 6px;
color: ${({theme}) => theme.COLORS.WHITE_2};
background-color: ${({theme}) => theme.COLORS.GRAY_4};
`
