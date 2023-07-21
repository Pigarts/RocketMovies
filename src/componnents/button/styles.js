import  styled  from "styled-components";

export const Container = styled.button`
display: flex;
gap: 8px;
height: 58px;
width: 100%;
align-items: center;
justify-content: center;

background-color: ${(props) => props.variant === "2" ?  (props) => props.theme.COLORS.BACKGROUND_1  : (props) => props.theme.COLORS.COLOR_1 };
color: ${(props) => props.variant === "2" ?  (props) => props.theme.COLORS.COLOR_1  : (props) => props.theme.COLORS.BACKGROUND_1 };
border: 0;
padding: 0 16px;
margin-top: 16px;
border-radius: 10px;

font-weight: 500;
&:disabled {
    opacity: .5;
}
` 