import {Container, Content} from "./styles"
import {Header} from "../../componnents/header"
import { AiOutlineArrowLeft } from "react-icons/Ai"
import {Input} from "../../componnents/input"
import {TextBox} from "../../componnents/textBox"
import {NoteIten} from "../../componnents/NoteIten"
import {Button} from "../../componnents/button"
import {Button_2} from "../../componnents/button_style_2"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

export function NewNote() {
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [description, setDescription] = useState("")

    
    function handleAddTags(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");    
    }
    function handleRemoveTags(deleted) {
        setTags(prevState => [...prevState.filter(tag => tag !== deleted)]);
    }
    
    function handleClearFields() {
        
    }

    function handleSaveMovie() {
        console.log(title, rating, description, tags)
        if(newTag) {
           return alert("Tag escrita mas não adicionada")
        }
        if(rating > 5) {
           return alert("A nota tem que estar entre 0 e 5")

        }
        if(!title || !rating || !description) {
            return alert(`Apenas os marcadores são opcionais
não deixe nenhum outro campo vazio`)
         }

         api.post("/notes", {title, rating, description, tags})
         alert("Nota cadastrada com sucesso")
    }

    return (
        <Container>
            <Header/>
            <Content>
            <Link to="/"><AiOutlineArrowLeft/>Voltar </Link>
            <h1>Novo filme</h1>
            <div id="line1">
                <Input type="text" placeholder="Titulo"
                onChange={e => setTitle(e.target.value)} />
                <Input type="number" min="0" max="5" placeholder="Sua nota (de 0 a 5)"
                onChange={e => setRating(e.target.value)} />
            </div>
            <TextBox placeholder="Observações"
            onChange={e => setDescription(e.target.value)}/>

            <p is="#s1">Marcadores</p>
            <div id="tags">
                <NoteIten 
                $isNew 
                placeholder="Novo marcador"
                value={newTag}
                onChange={e => setNewTag(e.target.value)} 
                onClick={handleAddTags}
                />
                
                {
                    tags.map((tag, index)=>( 
                        <NoteIten 
                            key={String(index)}
                            value={tag}
                            onClick={() => handleRemoveTags(tag)}
                            />
                    ))
                }
                
            </div>
            <div id="line4">
            <Button_2 title= "Excluir filme" onClick={handleClearFields} /> <Button title= "Cadastrar" onClick={handleSaveMovie} /> 

            </div>
            </Content>
        </Container>

    )
}