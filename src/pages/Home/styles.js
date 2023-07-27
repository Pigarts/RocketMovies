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
export const NoteBox = styled.div`
max-height: 717px;
margin: 0 auto ;
overflow-y: auto;
overflow-x: hidden;

display: flex;
gap: 24px;
flex-direction: column;
align-items: flex-start;



a {
   
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.BACKGROUND_1};
}
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