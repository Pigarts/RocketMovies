import {Container, Content, NoteBox, Modal} from "./styles"
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
  const [modalDisplay, setModalDisplay] = useState("open");

 


  function handleInputChange(event) {
    setSearch(event.target.value);

  }
  
  function handleDetails(id) {
    navigate(`Movie/${id}`)
  }

  function handleModalClose() {
    setModalDisplay ("close")
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
        <Modal variant={modalDisplay} > <p>
          <h2>
            Repositorio: <Link to="https://github.com/Pigarts/RocketMovies"> RocketMovies</Link>
          </h2>
          <span>Branche online: <strong>Test</strong> </span>
          <h2>
          Bugs conhecidos:
          </h2>
          <ul>  
            <li>404 ao ir direto a uma URL com parametros, diferente da inicial. </li>
            <li>Quando a pesquisa por notas é feita fora da pagina home a URL é alterada mas o usuario não é redirecionado </li>
          </ul>
            </p> <Button title={"fechar"} onClick={handleModalClose}/> </Modal>
        <Header onInputChange={handleInputChange}/>
        <Content>
        <div>
        <h2>Meus filmes</h2>
        <div className="buttonBox">
        <Button variant= "home" title={<Link to="/new"> <Plus/> Adicionar filme</Link>} onClick={handleModalClose}/>
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