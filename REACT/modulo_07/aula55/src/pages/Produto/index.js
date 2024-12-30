import { useParams } from "react-router-dom";

function Produto(){
    const { id } = useParams();

    return(
        <div>
            <h2>Detalhes do Produto</h2>
             <span>
                PRODUTO É: {id} 
             </span>
        </div>
    );
}

export default Produto;