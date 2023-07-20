import { Container, Rating } from "./styles";
import { Tag } from "../tags";
import { Link } from "react-router-dom";
import {OutlineStar, FullStar} from "../../componnents/Icons"


export function Note({ data, ...rest }) {
  const rating = data.rating || 0;
  const maxRating = 5;
  const stars = [];

  for (let i = 0; i < maxRating; i++) {
    const Icon = i < rating ? FullStar : OutlineStar;

    stars.push(
      <Rating key={i}>
        <Icon />
      </Rating>
    );
  }

  return (
    <Container {...rest}>
      <Link to="/movie">
      <h1>{data.title}</h1>
    <Rating>
      {stars}
    </Rating>
      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
            ))}
        </footer>
      )}
      </Link>
    </Container>
  );
}
