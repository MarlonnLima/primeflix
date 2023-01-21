import "./style.css"

export default function Banner(){
    return(
        <div className="img-banner">
            <div className="container-flex-banner">
                <h1>Bem-vindo(a) ao <span className="gradient">Prime Flix!</span></h1>
                <h2>Sua central de cinema 🍿</h2>
            </div>    
        </div>
    )
}