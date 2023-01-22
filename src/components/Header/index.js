import './header.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
export default function Header(){
    useEffect(()=>{
        AOS.init()
    }, [])
    return(
        <header>
            <Link data-aos = "fade-right" data-aos-duration = "500" className = "logo gradient" to = "/">Prime Flix</Link>
            <Link data-aos = "fade-left" data-aos-duration = "500" className = "favoritos" to = "/favoritos">Meus Filmes 🍿</Link>
        </header>
    )
}