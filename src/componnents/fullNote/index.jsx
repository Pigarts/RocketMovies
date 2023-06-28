import { Container, Title, Rating, Profile, Tags, Description } from "./styles";
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle } from "react-icons/Ai";
import { Tag } from "../tags";

export function FullNote({ data, ...rest }) {
  const rating = data.rating || 0;
  const maxRating = 5;
  const stars = [];

  for (let i = 0; i < maxRating; i++) {
    const Icon = i < rating ? AiFillStar : AiOutlineStar;

    stars.push(
      <Rating key={i}>
        <Icon />
      </Rating>
    );
  }

  return (
    <Container {...rest}>
    <Title>{data.title}<Rating>{stars}</Rating></Title>
    <Profile>
      <img src="https://pbs.twimg.com/profile_images/1598096522192863232/rorhCIE3_400x400.jpg" alt="imagem de perfiel" />
      <span>Por Pigarts</span>
      <AiOutlineClockCircle/> <span>23/05/22 às 08:00</span>
    </Profile>
    <Description>{data.text}</Description>

      {data.tags && (
          <Tags>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
            ))}
          </Tags>
      )}
    </Container>
  );
}
