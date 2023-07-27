import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import {Container, Content, Form, Background, Modal} from "./styles"
import {Input} from "../../componnents/input"
import {Button} from "../../componnents/button"
import { Link } from "react-router-dom";
import { Email, Lock } from "../../componnents/Icons";



export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [modalDisplay, setModalDisplay] = useState("open");
    
    const  {signIn}  = useAuth()
    
    function handleSignIn() {
        signIn({email, password})
    }
    function handleModalClose() {
        setModalDisplay ("close")
      }
    return (
        <Container>
            <Content>
            <Modal variant={modalDisplay} > <p>
          <h2>
            Repositorio: <Link target="_blank" to="https://github.com/Pigarts/RocketMovies"> RocketMovies</Link>
          </h2>
         
          <h2>Bugs conhecidos:</h2>
          <ul>  
            <li>404 ao ir direto a uma URL com parametros, diferente da inicial. </li>
            <li>Quando a pesquisa por notas é feita fora da pagina home a URL é alterada mas o usuario não é redirecionado </li>
          </ul>
            </p> <Button title={"fechar"} onClick={handleModalClose}/> </Modal>
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
                <Link to="/SiginUp">Criar conta</Link>
            </Content>
            <Background/>
        </Container>
    )
}