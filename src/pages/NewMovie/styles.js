import styled from "styled-components"

export const Container = styled.div`
    min-width: 800px;
`

export const Content = styled.div`
    padding: 0 123px;
    overflow-y: auto;
    
    a{
        display: flex;
        align-items: center;
        color: ${({theme}) => theme.COLORS.COLOR_1};
        margin-bottom: 24px;
        gap: 8px;
    }

    h1{
        font-size: 36px;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.WHITE_1};
        margin-bottom: 40px;

    }

    >#line1 {
        display: flex;
        gap: 40px;
        margin-bottom: 40px;
    }
    p{
        margin-top: 40px;   
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.GRAY_1};
    }

    >#tags {
        margin-top: 24px;
        width: 100%;
        min-height: 88px;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 16px;
        gap: 24px;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_1};

    }

    #line4{
        display: flex;
        margin-top: 40px;
        gap: 40px;

        margin-bottom: 100px;
    }

`