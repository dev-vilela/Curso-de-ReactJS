import {useEffect , useState} from 'react';
import api from '../../services/api';
//

function Home(){

        const [filmes, setFilmes] = ([]);

        useEffect(() =>{
            
            async function loadFilmes() {
                const response = await api.get("movie/now_playing", {
                    params:{
                        api_key: "93f3643b803aa1eaed109fc974584030",
                        language: "pt-BR",
                        page:1,
                    }
                })

                console.log(response.data.results);
            };

            loadFilmes();

        },[])

    return(
        <div>
            <h1>PAGINA HOME</h1>
        </div>
    );
}

export default Home;