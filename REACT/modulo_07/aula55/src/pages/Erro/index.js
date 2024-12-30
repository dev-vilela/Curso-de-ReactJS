import { Link } from "react-router-dom";

function Erro(){
    return(
        <div>
            <h2>Ops não encotramos essa pagina!</h2>

            <span>Nossas paginas são essas: </span> <br/>
            
            <Link to="/" >Home</Link> <br/>
            <Link to="/sobre" >Sobre</Link> <br/>
            <Link to="/contato" >Contato</Link> <br/>
        </div>
    );
}

export default Erro;