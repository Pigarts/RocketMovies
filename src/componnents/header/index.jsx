import { Container, Profile, SearchBox } from "./styles";
import { Input } from "../input";
import { Link, useNavigate, useLocation} from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { TextButton } from "../textButton";
import avatarPlaceholder from "../../assets/avatar_placeholder_copiar.png"
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Note } from "../Note";



export function Header({onInputChange}) {
    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState("")

    const location = useLocation();
    const { pathname } = location;

    const navigate = useNavigate()
    

    const  {signOut, user}  = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceholder

    let inputFunction

    if(pathname != "/"){
        inputFunction = handleInputChange
    } else {
        inputFunction = onInputChange
    }

    function handleSignOut() {
        navigate("/")
        signOut()
    }
    


    function handleInputChange(event) {
        setSearch(event.target.value);
       
    }
    
    function handleDetails(id) {  
        navigate(`/movie/${id}`);
        window.location.reload()  
      }

    useEffect(() => {
        if(search.length > 0 ) {

            async function fetchNotes() {
                const response = await api.get(`notes?title=${search}&tags=`);
                setNotes(response.data);
                console.log(notes)
                }
            
            fetchNotes()} else {
                setNotes("")
            }
            
      }, [search]);

    return(
    <Container> 
        <Link to="/">
        <h1>RocketMovies</h1>
        </Link>
        <Input 
        placeholder="Pesquisar pelo título"
        onChange={inputFunction}
        />
        { notes &&
            <SearchBox>
            {
                notes.map(note => (
                    <Note 
                    key={String(note.id)}
                    data={note}
                    onClick={() => handleDetails(note.id)}/>
                    
                    ))
                    
                }
                </SearchBox>
        }
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