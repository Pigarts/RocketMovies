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
