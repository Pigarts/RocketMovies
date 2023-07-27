import {Container, Content, NoteBox} from "./styles"
import {Header} from "../../componnents/header"
import { Note } from "../../componnents/Note";
import {Link, useNavigate} from "react-router-dom"
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import {Plus} from "../../componnents/Icons"
import { Button } from "../../componnents/button";



export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate()


 


  function handleInputChange(event) {
    setSearch(event.target.value);

  }
  
  function handleDetails(id) {
    navigate(`Movie/${id}`)
  }




  useEffect(() => {
    async function fetchNotes() {
        const response = await api.get(`notes?title=${search}&tags=`);
        setNotes(response.data);
  
        
    }
    
    fetchNotes();
    }, [search]);

    return(
    <Container>
        <Header onInputChange={handleInputChange}/>
        <Content>
        <div>
        <h2>Meus filmes</h2>
        <div className="buttonBox">
        <Button variant= "home" title={<Link to="/new"> <Plus/> Adicionar filme</Link>} />
        </div>
        </div>

        <NoteBox>
        {
                notes.map(note => (
                    <Note 
                        key={String(note.id)}
                        data={note}
                        onClick={() => handleDetails(note.id)}
                        />
                    ))
                }
        
        </NoteBox>
                                                            
        </Content>
    </Container>
  );
}