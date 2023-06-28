import styled from 'styled-components';


export const Container = styled.button`
  width: 100%;
  background-color: ${( {theme} ) => theme.COLORS.COLOR_2};
  border: none;
  border-radius: 10px;
  padding: 22px;
  margin-bottom: 16px;
  margin-top: 37px;
  >h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${( {theme} ) => theme.COLORS.WHITE_1};
  }

  >p{
    color: ${( {theme} ) => theme.COLORS.GRAY_1};
    text-align: justify;
    width: 100%;
    height: 52px;
    font-size: 16px;
    line-height: 18px;
    text-overflow: ellipsis;
    overflow-y: hidden;
    margin-top: 15px;
  }

  >footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
    
  }
`
export const Rating = styled.div`
display: flex;
gap: 6px;
width: 84px;
height: 12px;
margin-top: 4px;
>svg {
    height: 12px;
    width: 12px;
    color: ${( {theme} ) => theme.COLORS.COLOR_1};
}

`