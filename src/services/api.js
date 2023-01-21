import axios from 'axios'
//base da url: https://api.themoviedb.org/3/ 
//url da api: https://api.themoviedb.org/3/movie/now_playing?api_key=ef2ee8ceb8a0be52f4b8f689892a37ed&language=pt-BR

const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/'
})

export default api;