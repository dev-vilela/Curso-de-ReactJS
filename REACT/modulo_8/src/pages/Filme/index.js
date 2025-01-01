import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './filme-info.css';
import api from '../../services/api'
import {Link} from 'react-router-dom';


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
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className='area-btn' >
                <button>Salvar</button>
                <button>
                    <a href='#' >Trailer</a>
                </button>

                <Link to='/' className='btn-voltar' >Voltar</Link>
            </div>

            {/* <div className='btn-voltar' >
            <Link to='/' >Voltar</Link>
            </div> */}
        </div>
    );
}

export default Filme;