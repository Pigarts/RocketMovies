import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import {Container, Content, Form,Background} from "./styles"
import {Input} from "../../componnents/input"
import {Button} from "../../componnents/button"
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom";


export function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const  {signIn}  = useAuth()

    function handleSignIn() {
        signIn({email, password})
    }
    return (
        <Container>
            <Content>
                <Form>
                <h1>RocketMovies</h1>
                <p id="p1">Aplicação para acompanhar tudo que assistir.</p>
                <p>Faça seu login</p>
                <Input type="email" placeholder="E-mail"  icon={FiMail}
                    onChange={e => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Senha" icon={FiLock}
                    onChange={e => setPassword(e.target.value)}/>
                <Button title= "Entrar" onClick={handleSignIn} />
                </Form>
                <Link to="/signin">Criar conta</Link>
            </Content>
            <Background/>
        </Container>
    )
}