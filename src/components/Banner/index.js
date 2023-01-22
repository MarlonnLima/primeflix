import AOS from "aos"
import { useEffect } from "react"
import "./style.css"

export default function Banner(){
    useEffect(()=>{
        AOS.init()
        }, [])

    return(
        <div className="img-banner">
            <div className="container-flex-banner">
                <h1 data-aos = "fade-in" data-aos-duration ="1500">Bem-vindo(a) ao <span className="gradient">Prime Flix!</span></h1>
                <h2 data-aos = "flip-right" data-aos-duration ="2000">Sua central de cinema 🍿</h2>
            </div>    
        </div>
    )
}