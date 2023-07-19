import styled from "styled-components";

export const Container = styled.header`

background-color: ${({theme}) => theme.COLORS.BACKGROUND_2};
border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_3};
display: flex;

align-items: center;
justify-content: space-between;
padding: 24px 123px;
margin-bottom: 50px;
z-index: 1;
position: relative;
a{

    >h1 {
        color: ${({theme}) => theme.COLORS.COLOR_1};
        font-size: 24px;
        font-weight: 700;
        margin-right: 64px;
        z-index: 1;

    }
}
    
`
export const Profile = styled.div`
display: flex;
margin-left: 64px;
z-index: 1;


>div {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    z-index: 1;

>span {
    font-weight: 700;
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.WHITE_1};
    z-index: 1;
    
    }

>a {
    color: ${({theme}) => theme.COLORS.GRAY_2};
    z-index: 1;
}
    
}

img {
    height: 64px;
    width: 64px;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_3};
    border-radius: 50%;
    z-index: 1;
}

`
export const SearchBox = styled.div`
z-index: 1000;
position: absolute;
margin-top: 26%;
left: 50%;
transform: translateX(-50%);

background-color: #1c1b1e;
padding: 16px;
width: 50%;
max-height: 250px;
overflow-y: scroll;
overflow-x: hidden;

display: flex;
flex-direction: column;
gap: 16px;
align-items: flex-start;
`