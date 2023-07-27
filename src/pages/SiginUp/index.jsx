import { Container, Content, Form, Background } from "./styles"
import { Input } from "../../componnents/input"
import { Button } from "../../componnents/button"
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api"
import { useState } from "react"
import { ArrowLeft, User, Email, Lock } from "../../componnents/Icons";


export function SignUp() {
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
                onChange={e => setName(e.target.value)} icon={User}/>
                <Input type="email" placeholder="E-mail"  
                onChange={e => setEmail(e.target.value)} icon={Email}/>
                <Input type="password" placeholder="Senha" 
                onChange={e => setPassword(e.target.value)} icon={Lock}/>
                <Button title= "Cadastrar" onClick={e => handleSignUp(e)} />
                </Form>
                <Link to="/"><ArrowLeft/> Voltar para o login</Link>
            </Content>
            <Background/>
        </Container>
    )
}