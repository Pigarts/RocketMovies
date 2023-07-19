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