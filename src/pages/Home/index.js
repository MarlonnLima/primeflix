import {useEffect, useState} from 'react'
import api from "../../services/api"
import {Link} from 'react-router-dom'
import './home.css'
import Banner from "../../components/Banner";
import Loading from '../../components/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
        loadFilmes();
        AOS.init();
    }, [])
    
    if(loading){
        return(
            <div>
                <Loading />
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
                        <article data-aos = "fade-out" key = {filme.id}>
                            <strong>{filme.title}</strong>
                            <img src = {`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt ={filme.title} />
                            <Link to = {`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )

}