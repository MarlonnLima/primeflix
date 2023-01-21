import {useEffect, useState} from 'react'
import api from "../../services/api"
import {Link} from 'react-router-dom'
import './home.css'
import Banner from "../../components/Banner";
// https://api.themoviedb.org/3/ 

export default function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get('movie/now_playing', {
                params:{
                    api_key: 'ef2ee8ceb8a0be52f4b8f689892a37ed',
                    language: 'pt-BR',
                    page: 1,
                }
            })
            //console.log(response.data.results.slice(0, 10))
            setFilmes(response.data.results)
            setLoading(false)
        }
        loadFilmes()
    }, [])
    
    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando filmes...</h2>
            </div>
            )
    }
    return(
        <div>
            <Banner />
            <div className='lista-filmes'>
                <h2 className='secao-lancamentos'>Lançamentos</h2>
                {filmes.map((filme)=>{
                    return(
                        <article key = {filme.id}>
                            <strong>{filme.title}</strong>
                            <img src = {`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt ={filme.title} />
                            <Link to = {`/primeflix/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )

}