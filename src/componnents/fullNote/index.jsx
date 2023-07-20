import { Container, Title, Rating, Profile, Tags, Description } from "./styles";
import { Tag } from "../tags";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder_copiar.png"
import { api } from "../../services/api";


export function FullNote({ data, ...rest }) {
const {user} = useAuth()
const avatarUrl = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceholder

  const rating = data.rating || 0;
  const maxRating = 5;
  const stars = [];

  for (let i = 0; i < maxRating; i++) {
    const Icon = i < rating ? "A" : "a";

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
      <img src={avatarUrl} alt="imagem de perfiel" />
      <span>Por {user.name}</span>
       <span>{data.created_at}</span>
    </Profile>
    <Description>{data.description}</Description>

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
