import styled from "styled-components";

export const Container = styled.div`
width: 100svw;
min-width: 700px;

header{ 
    height: 144px;
    width: 100%;
    padding: 0 124px;
    display: flex;

    align-items: center;
    background-color: ${({theme}) => theme.COLORS.COLOR_2};

    a{
        color: ${({theme}) => theme.COLORS.COLOR_1};
        display: flex;
        align-items: center;
        gap: 8px;
    }

    svg {
        color: ${({theme}) => theme.COLORS.COLOR_1};
        font-size: 24px;
    }
}

`

export const Form = styled.form`
max-width: 440px;
display: flex;

flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin: 0 auto 0;

>div:nth-child(4){
    margin-top: 24px;
}
`
export const Avatar = styled.div`
margin-top: -83px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 186px;
    height: 186px;
    margin-bottom: 64px;
    >img{
        width: 186px;
        height: 186px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
    }

    
    >label {
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 7px;
        right: 7px;
        border-radius: 50%;
        background-color: ${({theme}) => theme.COLORS.COLOR_1};
        cursor: pointer;
        svg {
           height: 20px;
           width: 20px;
           color: ${({theme}) => theme.COLORS.BACKGROUND_2};
       }
    }
    
    input {
        display: none;
    }
`
