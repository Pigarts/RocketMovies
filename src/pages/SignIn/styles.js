import styled from "styled-components"
import  background from "../../assets/background.png"


export const Container = styled.div`
display: flex;

width: 100svw;

`
export const Content = styled.div`
display: flex;
flex-direction: column;
height: 100svh;
width: 637px;
padding: 0 136px;
align-items: center;
justify-content: center;

h1{
    color: ${({theme}) => theme.COLORS.COLOR_1};
    font-weight: 700;
    font-size: 48px;
}

#p1 {
    color: ${({theme}) => theme.COLORS.GRAY_5};
    font-size: 14px;
    
}

p {
    margin-bottom: 48px;
    font-size: 24px;
    font-weight: 500;
}

>a {
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.COLORS.COLOR_1};
    
}
`
export const Form = styled.form`
margin-bottom: 42px;
`

export const Background = styled.div`
background: url(${background}) no-repeat center center;

flex: 1;

`
export const Modal = styled.dialog`
z-index: 5;
position: absolute;

display: flex;
flex-direction: column;

top: 20%;
left: 50%;
transform: translateX(-50%);

background:  ${({theme}) => theme.COLORS.BACKGROUND_3};
border-color: ${({theme}) => theme.COLORS.COLOR_1};
padding: 25px 66px ;
width: 50%;
//max-height: 250px;


display: ${(props) => props.variant === "open" ? `flex` : `none` };
gap: 6px;
align-items: center;
justify-content: center;

p {
    display: flex;
    flex-direction: column;
    gap: 10px; 
    color: ${({theme}) => theme.COLORS.WHITE_1};
    text-align: justify;
    a {
        color: ${({theme}) => theme.COLORS.WHITE_1};
        text-decoration: underline;
    }
    strong {
        text-transform: uppercase;
    }
}
`