import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import api from '../../services/api'

function Filme(){
        const {id} = useParams();
        const [filme, setFilme] = useState({});
        const  [loading, setLoading] = useState(true);

        useEffect(() =>{
            async function loadFilme() {
                await api.get(`/movie/${id}`,{
                    params:{
                        api_key: "93f3643b803aa1eaed109fc974584030",
                        language: "pt-BR"
                    }
                })

                .then((response) =>{
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(()=>{
                    console.log("Filme não encontrado")
                })
            }

            loadFilme();

            return() =>{
                console.log("COMPONETE FOI DESMONTADO")
            }
        }, []);

        if(loading){
            return(
                <div className='filme-info' >
                    <h1>Carregando detalhes...</h1>
                </div>
            )
        }

    return(
        <div className='filme-info' >

            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}` }  alt={filme.title} />

            <h2>Sinopse</h2>
            <spna>{filme.overview}</spna>

            <strong>Avaliação: {filme.vote_average} / 10</strong>
        </div>
    );
}

export default Filme;