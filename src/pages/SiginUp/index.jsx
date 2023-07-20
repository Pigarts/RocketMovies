import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import {Container, Content, Form,Background} from "./styles"
import {Input} from "../../componnents/input"
import {Button} from "../../componnents/button"
import { Link } from "react-router-dom";
import { Email, Lock } from "../../componnents/Icons";



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
                <Input type="email" placeholder="E-mail" 
                    onChange={e => setEmail(e.target.value)} icon={Email}/>
                <Input type="password" placeholder="Senha"
                    onChange={e => setPassword(e.target.value)} icon={Lock}/>
                <Button title= "Entrar" onClick={handleSignIn} />
                </Form>
                <Link to="/signin">Criar conta</Link>
            </Content>
            <Background/>
        </Container>
    )
}