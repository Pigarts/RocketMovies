import {Container, Profile} from "./styles";
import {Input} from "../input";
import {Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { TextButton } from "../textButton";
import avatarPlaceholder from "../../assets/avatar_placeholder_copiar.png"
import { useState, useEffect } from "react";
import { api } from "../../services/api";



export function Header({onInputChange}) {
    const [search, setSearch] = useState("")
    const location = useLocation();
    const { pathname } = location;

    const  {signOut, user}  = useAuth()
    const navigate = useNavigate()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceholder

    function handleSignOut() {
        navigate("/                                                                                             ")
        signOut()
    }

    function handleInputChange(event) {
        setSearch(event.target.value);
      }

    useEffect(() => {
        if(search.length > 0 )
        {console.log(`pesquisa: ${search}`);}
      }, [search]);

    return(
    <Container> 
        <Link to="/">
        <h1>RocketMovies</h1>
        </Link>
            <Input placeholder={"Pesquisar pelo título"}
            onChange={onInputChange}/>
        <Profile>
        <div>
            <span>{user.name}</span>
            <TextButton title={"sair"} onClick={handleSignOut}/>
            
        </div>
            <Link to="/profile">
        <img src={avatarUrl} alt="imagem de perfil" />
            </Link>

        </Profile>

    </Container>
 )
}