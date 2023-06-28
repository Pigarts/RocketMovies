import {Routes, Route} from "react-router-dom"

import {Home} from "../pages/Home"
import {NewNote} from "../pages/newMovie"
import {Profile} from "../pages/Profile"
import {Movie} from "../pages/Movie"

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/new" element={<NewNote/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/Movie" element={<Movie/>} />
        </Routes>
    )
}