import axios from 'axios';

//Base da URL: https://api.themoviedb.org/3/
//URL da API : https://api.themoviedb.org/3/movie/now_playing?api_key=93f3643b803aa1eaed109fc974584030&language=pt-BR 

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;