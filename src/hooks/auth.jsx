import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
export const AuthContext = createContext({});


function AuthProvider({children}) {
    const [data, setData] = useState({});

    async function signIn({email, password}) {
        try {
            const response = await api.post("/sessions", {email, password})
            const {user, token} = response.data;
            localStorage.setItem("@rocketMovies:user",JSON.stringify(user));
            localStorage.setItem("@rocketMovies:token", token);
            
            api.defaults.headers.authorization = `bearer ${token}`
            setData({user, token})

        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel entrar")
            }
        }
    }

    async function updateProfile({user, avatarFile}) {
        if(avatarFile) {
            const fileUpdateForm = new FormData();
            fileUpdateForm.append("avatar", avatarFile)
            const response = await api.patch("/users/avatar", fileUpdateForm)
            user.avatar = response.data.avatar 
        }
        try {
            await api.put("/users", user),
             localStorage.setItem("@rocketMovies:user",JSON.stringify(user))
             setData({user, token: data.token})
             alert("Usuario atualizaddo com sucesso!")
         } catch (error) {
             if (error.response) {
                 alert(error.response.data.message), console.log("erro 1");
             } else{ 
                 alert("Não foi possivel atualizar"), console.log("erro 2");
              }
         }
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketMovies:token")
        const user = localStorage.getItem("@rocketMovies:user")
    
        if(token && user) {
            api.defaults.headers.common["authorization" ] = `Bearer ${token}`;
    
            setData(
                {
                    token,
                    user: JSON.parse(user)
                }
            )
        }
    
    }, [])

    function signOut() {
        localStorage.removeItem("@rocketMovies:token");
        localStorage.removeItem("@rocketMovies:user");
        setData({});
    }

    return(
        <AuthContext.Provider value={{signIn, updateProfile, signOut, user: data.user}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context
}


export { AuthProvider, useAuth };