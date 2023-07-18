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
}

`
export const Notebox = styled.div`
width: 98%;
display: flex;
align-items: flex-start;
max-height: 717px;
margin: 0 auto ;
display: flex;
flex-direction: column;
align-items: center;

overflow-y: auto;
overflow-x: hidden;

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