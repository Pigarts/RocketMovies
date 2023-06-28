import {styled} from "styled-components"

export const Container = styled.div`



background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_3};
color: ${({theme}) => theme.COLORS.WHITE_2};

border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_3}` : "none"};

border-radius: 10px;
padding-right: 16px;


>button {
    border: none;
    background: none;
}

.button-remove{
    color: ${({theme}) => theme.COLORS.COLOR_1};
}

.button-add{
    color: ${({theme}) => theme.COLORS.COLOR_1};
}

>input{ 
    height: 56px;
    padding: 12px;
    width: auto; 
    

    color: ${({theme }) => theme.COLORS.WHITE_2};

    background: transparent;
    border: none;
    outline: none;

    &::placeholder {
    color: ${({theme }) => theme.COLORS.GRAY_300};
    }
}
`