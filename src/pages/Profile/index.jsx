import {Container, Form, Avatar} from "./styles"
import { Input } from "../../componnents/input";
import { Button } from "../../componnents/button"
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth"
import { useState } from "react";
import  avatarPlaceholder  from "../../assets/avatar_placeholder_copiar.png"
import {api} from "../../services/api"


export function Profile() {
    const  { user, updateProfile }  = useAuth()
    const [ name, setName ] = useState(user.name)
    const [ email, setEmail ] = useState(user.email)
    const [ oldPassword, setOldPassword ] = useState("")
    const [ newPassword, setNewPassword ] = useState("")

    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceholder
    const [ avatar, setAvatar ] = useState(avatarUrl)
    const [ avatarFile, setAvatarFile ] = useState(null)


    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        };

        const userUpdated = Object.assign(user, updated);

       await updateProfile({user: userUpdated, avatarFile})
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)
        const imgPreview = URL.createObjectURL(file)
        setAvatar(imgPreview)
    }

    return(
        <Container> 
                <header>
                    <Link to="/">Voltar</Link>                
                </header>
                <Form>
                    <Avatar>
                        <img src={avatar} alt="imagem de perfiel" />
                        <label htmlFor="avatar">
                            
                            <input onChange={handleChangeAvatar} id="avatar" type="file" />
                        </label>
                    </Avatar>
                <Input type="text" placeholder="Nome" value={name} 
                 onChange={e => setName(e.target.value)}/>
                <Input type="email" placeholder="E-mail" value={email} 
                 onChange={e => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Senha" 
                 onChange={e => setOldPassword(e.target.value)}/>
                <Input type="password" placeholder="Nova senha" 
                 onChange={e => setNewPassword(e.target.value)}/>
                <Button disabled title= "Salvar" onClick={handleUpdate} />
                </Form>
        </Container>
    
    )
}