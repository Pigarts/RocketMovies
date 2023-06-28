import  styled  from "styled-components";

export const Container = styled.button`
display: flex;
gap: 8px;
height: 58px;
width: 100%;
align-items: center;
justify-content: center;

background-color: ${({theme}) => theme.COLORS.COLOR_1};
border: 0;
padding: 0 16px;
margin-top: 16px;
border-radius: 10px;

font-weight: 500;
color: ${({theme}) => theme.COLORS.BACK};

&:disabled {
    opacity: .5;
}

` 