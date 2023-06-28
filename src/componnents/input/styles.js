import { styled }  from "styled-components";


export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
background-color:  ${({theme}) => theme.COLORS.BACKGROUND_3};
border-radius: 10px;



margin-bottom: 8px;

>svg {
    margin-left: 16px;
}

>input {
    height: 56px;
    width: 100%;
    padding: 24px 19px;
    color: ${({theme}) => theme.COLORS.WHITE_2};
   background: transparent;
   outline: none;

    border: none;
    
    &:placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_2};
    }
}
`