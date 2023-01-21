import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import "./favoritos.css"
import { toast } from "react-toastify"
export default function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item)=>{
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
        toast.success("Filme excluído com sucesso!")
    }

    return(
        <div className="meus-filmes">

        {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}

        <ul className='container-favoritos'>
            {filmes.map((filme) =>{
                return(
                    <li className='filme-favorito' key = {filme.id}>
                    <img src = {`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt ={filme.title} />
                        <span>{filme.title}</span>
                        <div>
                            <Link className = "link-favorito" to={`/filme/${filme.id}`}>Detalhes</Link>
                            <button onClick= {() => excluirFilme(filme.id)}>Excluir</button>
                        </div>
                    </li>
                )
            })}
        </ul>
        </div>
    )
}

