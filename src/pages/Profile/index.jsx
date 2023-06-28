import {Container, Form, Avatar} from "./styles"
import { Input } from "../../componnents/input";
import {Button } from "../../componnents/button"
import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom";


export function Profile() {
    return(
        <Container> 
                <header>
                    <Link to="/"><FiArrowLeft/>Voltar</Link>
                  
                
                </header>
                <Form>
                    <Avatar>
                        <img src="https://pbs.twimg.com/profile_images/1598096522192863232/rorhCIE3_400x400.jpg" alt="imagem de perfiel" />
                        <label htmlFor="avatar">
                            <FiCamera/>
                            <input id="avatar" type="file" />
                        </label>
                    </Avatar>
                <Input type="text" placeholder="Nome"  icon={FiUser}/>
                <Input type="email" placeholder="E-mail"  icon={FiMail}/>
                <Input type="password" placeholder="Senha" icon={FiLock}/>
                <Input type="password" placeholder="Nova senha" icon={FiLock}/>
                <Button disabled title= "Salvar" />
                </Form>
        </Container>
    
    )
}