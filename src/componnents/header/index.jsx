import {Container, Profile} from "./styles";
import {Input} from "../input";
import {Link} from "react-router-dom";





export function Header() {
    return(
    <Container>
        <Link to="/">
        <h1>RocketMovies</h1>
        </Link>

            <Input placeholder={"Pesquisar pelo título"}/>
            <Link to="/profile">

        <Profile>
        <div>
            <span>Pigarts</span>
            <Link to="/">sair</Link>
            
        </div>
        <img src="https://pbs.twimg.com/profile_images/1598096522192863232/rorhCIE3_400x400.jpg" alt="imagem de perfil" />

        </Profile>
            </Link>

    </Container>
 )
}