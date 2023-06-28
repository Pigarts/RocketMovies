import {Container, Content} from "./styles"
import {Header} from "../../componnents/header"
import { AiOutlineArrowLeft } from "react-icons/Ai"
import {Input} from "../../componnents/input"
import {TextBox} from "../../componnents/textBox"
import {NoteIten} from "../../componnents/NoteIten"
import {Button} from "../../componnents/button"
import {Button_2} from "../../componnents/button_style_2"
import {Link} from "react-router-dom"
          






export function NewNote() {
    return (
        <Container>
            <Header/>
            <Content>
            <Link to="/"><AiOutlineArrowLeft/>Voltar </Link>
            <h1>Novo filme</h1>
            <div id="line1">
                <Input type="text" placeholder="Titulo"/>
                <Input type="text" placeholder="Sua nota (de 0 a 5)"/>
            </div>
            <TextBox placeholder="Observações"/>
            <p is="#s1">Marcadores</p>
            <div id="tags">
                <NoteIten value="React"/>
                <NoteIten placeholder="Novo marcador" isNew/>
            </div>
            <div id="line4">
            <Button_2 title= "Excluir filme" /> <Button title= "Cadastrar" /> 

            </div>
            </Content>
        </Container>

    )
}