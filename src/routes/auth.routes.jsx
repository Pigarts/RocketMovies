import {Routes, Route} from "react-router-dom"

import {SignUp } from "../pages/SiginUp"
import {SignIn} from "../pages/SignIn"

export function AuthRoutes() {
    return(
        <Routes>
        <Route path="/SiginUp" element={< SignUp/>} />
        <Route path="/" element={< SignIn/>} />
    </Routes>
        )
}