import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Filme from "./pages/Filme"
import Header from "./components/Header";
import Erro from "./pages/Erro";
import Favoritos from "./pages/Favoritos";

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path = "/primeflix/" element = {<Home />} />
                    <Route path = "/primeflix/filme/:id" element = {<Filme />} />
                    <Route path = "/primeflix/favoritos" element = {<Favoritos />} />





                    <Route path = "/primeflix/*" element = {<Erro />} />         
                </Routes>
        </BrowserRouter>
    )
}