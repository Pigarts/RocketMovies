import styled from 'styled-components';


export const Container = styled.div`
min-width: 800px;
`
export const Content = styled.div`
    padding:0 123px ;
>a {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.COLOR_1};
}

  `