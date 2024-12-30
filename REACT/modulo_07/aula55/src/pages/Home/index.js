import {Link} from 'react-router-dom';

function Home() {
    return (
      <div >
        <h1>Bem Vindo a pagina HOME</h1> <br/>
        <span>Paulo - Desenvolvedor FullStack</span> <br/><br/>

        <Link to="/Sobre">Sobre</Link> <br/>
        <Link to="/contato">Contato</Link>

      </div>
    );
  }
  
  export default Home;
  