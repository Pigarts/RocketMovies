import {styled} from "styled-components"

export const Container = styled.div`
min-width: 800px;


`
export const Content = styled.div`
padding: 0 123px;
margin: 0 auto ;


>.buttonBox{
    margin-top: 40px;
    width: 209;
    display: flex;
    align-items: center;
}
>div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 37px;
}

`
export const Notebox = styled.div`
max-height: 717px;
margin: 0 auto ;
overflow-y: auto;
overflow-x: hidden;

display: flex;
gap: 24px;
flex-direction: column;
align-items: flex-start;

`
export const NewNote = styled.button`



border-radius: 8px;
background-color: ${({theme}) => theme.COLORS.COLOR_1};
border: none;

text-align: center;



a {
    display: flex;
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.BACKGROUND_1};
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 16px 32px;
}
`;

export const Modal = styled.dialog`
z-index: 5;
position: fixed;

display: flex;
flex-direction: column;

top: 50%;
left: 50%;
transform: translateX(-50%);

background:  ${({theme}) => theme.COLORS.BACKGROUND_3};
border-color: ${({theme}) => theme.COLORS.COLOR_1};
padding: 16px;
width: 50%;
max-height: 250px;


display: ${(props) => props.variant === "open" ? `flex` : `none` };
gap: 16px;
align-items: center;
justify-content: center;

p {
    color: ${({theme}) => theme.COLORS.WHITE_1};
    text-align: center;
}
`