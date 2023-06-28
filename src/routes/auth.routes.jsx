import {Routes, Route} from "react-router-dom"

import {SignIn} from "../pages/SiginIn"
import {SignUp} from "../pages/SiginUp"

export function AuthRoutes() {
    return(
        <Routes>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/" element={<SignUp/>} />
    </Routes>
        )
}