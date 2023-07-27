import styled from "styled-components"
import  background from "../../assets/background.png"


export const Container = styled.div`
display: flex;

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