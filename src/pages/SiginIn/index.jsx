import {Container, Content, Form,Background} from "./styles"
import {Input} from "../../componnents/input"
import {Button} from "../../componnents/button"
import { AiOutlineArrowLeft } from "react-icons/Ai"
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom";





export function SignIn() {
    return (
        <Container>
            <Content>
                <Form>
                <h1>RocketMovies</h1>
                <p id="p1">Aplicação para acompanhar tudo que assistir.</p>
                <p>Crie sua conta</p>
                <Input type="text" placeholder="Nome" icon={FiUser}/>
                <Input type="email" placeholder="E-mail"  icon={FiMail}/>
                <Input type="password" placeholder="Senha" icon={FiLock}/>
                <Button title= "Cadastrar" />
                </Form>
                <Link to="/"><AiOutlineArrowLeft/> Voltar para o login</Link>
            </Content>
            <Background/>
        </Container>
    )
}