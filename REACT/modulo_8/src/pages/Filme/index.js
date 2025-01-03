import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import './filme-info.css';
import api from '../../services/api'
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';

function Filme(){
        const {id} = useParams();
        const navigation = useNavigate();
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
                    setLoading(false)
                })
                .catch(()=>{
                    console.log("Filme não encontrado")
                    navigation("/", {replace: true})
                    return;
                })
            }

            loadFilme();

            return() =>{
                console.log("COMPONETE FOI DESMONTADO")
            }
        }, [navigation, id]);

        function salvarFilme(){
            const minhaLista = localStorage.getItem("@primeflix");

            let filmesSalvos = JSON.parse(minhaLista) || [];

            const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id )

            if(hasFilme){
                toast.warn("ESSE FILME JÁ ESTA LISTA")
                return;
            }

            filmesSalvos.push(filme);
            localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
            toast.success("Filme salvo com sucesso!")


        }

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
                <button onClick={salvarFilme} >Salvar</button>
                <button>
                    <a target="blank" rell="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer `  } >Trailer</a>
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