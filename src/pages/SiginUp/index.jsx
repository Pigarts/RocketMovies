import {Container, Content, Form,Background} from "./styles"
import {Input} from "../../componnents/input"
import {Button} from "../../componnents/button"
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom";





export function SignUp() {
    return (
        <Container>
            <Content>
                <Form>
                <h1>RocketMovies</h1>
                <p id="p1">Aplicação para acompanhar tudo que assistir.</p>
                <p>Faça seu login</p>
                <Input type="email" placeholder="E-mail"  icon={FiMail}/>
                <Input type="password" placeholder="Senha" icon={FiLock}/>
                <Button title= "Entrar" />
                </Form>
                <Link to="/signin">Criar conta</Link>
            </Content>
            <Background/>
        </Container>
    )
}