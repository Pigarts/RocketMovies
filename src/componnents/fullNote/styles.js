import styled from 'styled-components';


export const Container = styled.div`

place-content: center;

display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto auto auto auto;
grid-template-areas: 
"movie rating"
"createdBy createdBy "
"tags tags"
"description description";

  background-color: ${( {theme} ) => theme.COLORS.BACKGROUND_2};

  overflow-y: auto;
`
export const Title = styled.h1`
 grid-area: movie;
 margin-right: 19px;
 margin-bottom: 24px;
 width: fit-content;
 text-align: left;
 font-size: 36px;
 font-weight: 500;
 color: ${( {theme} ) => theme.COLORS.WHITE_1};
 display: flex;
 align-items: center;
 gap: 19px;
 >svg{
  gap: 10px;
}
`

export const Rating = styled.div`
grid-area: rating;
display: flex;
gap: 6px;
width: 140px;
height: 20px;
margin-top: 4px;
>svg {
  height: 20px;
  width: 20px;
  color: ${( {theme} ) => theme.COLORS.COLOR_1};
}
`
export const Profile = styled.div`
grid-area: createdBy;
width: fit-content;
height: 19px;
display: flex;
justify-content: flex-start;
gap: 8px;
align-items: center;
>svg{
  color: ${( {theme} ) => theme.COLORS.COLOR_1};
  height: 16px;
  width: 16px;
}
>img{
  height: 16px;
  width: 16px;
  border-radius: 50%;
}
`
export const Tags = styled.div`
margin: 40px 0;
display: flex;
height: fit-content;
align-items: flex-start;
grid-area: tags;
`

export const Description = styled.p`
    grid-area: description;
    text-align: justify;
    max-width: 1113px;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow-y: hidden;
    color: ${( {theme} ) => theme.COLORS.WHITE_2};
  `