import { Container, Content, Form, Background } from "./styles"
import { Input } from "../../componnents/input"
import { Button } from "../../componnents/button"
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../src/services/api"
import { useState } from "react"

export function SignIn() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate() 

    function handleSignUp(e) {
        e.preventDefault()
        
        if(!name || !email || !password) {
            console.log("name")
            alert("Preencha todos os campos")
            return
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuario cadastrado com sucesso!")
            navigate("/");
        })
        .catch(error => {
            if (error.response) {
                alert(error.response.data.message), console.log("erro 1");
            } else{ 
                alert("Não foi possivel cadastrar"), console.log("erro 2");
             }
            });
    }

    return (
        <Container>
            <Content>
                <Form>
                <h1>RocketMovies</h1>
                <p id="p1">Aplicação para acompanhar tudo que assistir.</p>
                <p>Crie sua conta</p>
                <Input type="text" placeholder="Nome" 
                onChange={e => setName(e.target.value)}/>
                <Input type="email" placeholder="E-mail"  
                onChange={e => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Senha" 
                onChange={e => setPassword(e.target.value)}/>
                <Button title= "Cadastrar" onClick={e => handleSignUp(e)} />
                </Form>
                <Link to="/"> Voltar para o login</Link>
            </Content>
            <Background/>
        </Container>
    )
}