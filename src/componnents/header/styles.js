import styled from "styled-components";

export const Container = styled.header`

background-color: ${({theme}) => theme.COLORS.BACKGROUND_2};
border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_3};
display: flex;
align-items: center;
justify-content: space-between;
padding: 24px 123px;
margin-bottom: 50px;
a{

    >h1 {
        color: ${({theme}) => theme.COLORS.COLOR_1};
        font-size: 24px;
        font-weight: 700;
        margin-right: 64px;
    }
}
    
`
export const Profile = styled.div`
display: flex;
margin-left: 64px;

>div {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

>span {
    font-weight: 700;
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.WHITE_1};
    }

>a {
    color: ${({theme}) => theme.COLORS.GRAY_2};
}
    
}

>img {
    height: 64px;
    width: 64px;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_3};
    border-radius: 50%;
}

`