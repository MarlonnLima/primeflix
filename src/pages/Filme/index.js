import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import api from '../../services/api'
import './style.css'
import { toast} from 'react-toastify'
export default function Filme(){
    let contador = 0;
    const { id } = useParams();
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: 'ef2ee8ceb8a0be52f4b8f689892a37ed',
                    language: 'pt-BR',
                }
            })
            .then((response)=>{
                setFilme(response.data)
                setLoading(false)
            })
            .catch(()=>{
                console.log('filme não encontrado')
            })
        }
        loadFilme();


        return () => { 
            console.log('component foi desmontado')
        }
    }, [])

     function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const temFilme = filmesSalvos.some( (filmesSalvo)=> filmesSalvo.id === filme.id)

        if(temFilme){
          toast.warn("esse filme já está na sua lista")
          return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
        toast.success("Filme salvo com sucesso");
     }
    if(loading){
        return(
        <div className='filme-info'>
            <h1>Carregando Detalhes...</h1>
        </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
           <img src = {`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt ={filme.title} />
           <h3>Sinopse:</h3>
           <span>{filme.overview}</span>

           <strong>Avaliação: {filme.vote_average.toFixed(2)} /10 ☆</strong>
           <div className='area-buttons'>
            <button onClick = {salvarFilme}>Salvar</button>
            <button>
                <a href = {`https://www.youtube.com/results?search_query=${filme.title.replace(' ', '+')}+trailer`} target = "blank">Trailer</a>
            </button>
           </div>
        </div>
    )
}