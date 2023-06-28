import { styled }  from "styled-components";


export const Container = styled.textarea`

    background-color:  ${({theme}) => theme.COLORS.BACKGROUND_3};
    height: 274px;
    width: 100%;
    resize: none;
    padding: 24px 19px;
    
    border-radius: 10px;
    border: none;
    outline: none;
    color: ${({theme}) => theme.COLORS.WHITE_2};
    
    &:placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_2};
    }

`