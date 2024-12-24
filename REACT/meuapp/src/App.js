import React from "react";

const Equipe = (props) =>{
  return (
    <div>
        <Sobre nome={props.nome} cargo={props.cargo} 
        idade={props.idade} />

        <Social ld={props.Linkedin} />

        <hr></hr>
    </div>
  )
}

const Sobre = (props) =>{
  return(
    <div>
      <h2>Olá sou o(a) {props.nome}</h2>
      <h3>Cargo: {props.cargo} </h3>
      <h3>Idade: {props.idade} anos</h3>
    </div>
  )
}

const Social = (props) =>{
 return(
  <div>
    <a>Github |</a>
    <a href={props.ld}>Linkedin |</a>
    <a> YouTubbe </a>
  </div>
 )
}

function App(){
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>

      <Equipe nome="Paulo" cargo="Desenvolvedor" idade="22" Linkedin="https://www.linkedin.com/in/paulo-vilela-18126922b/"/>

      <Equipe nome="Rafa" cargo="Designer" idade="19" Linkedin="https://www.linkedin.com/in/paulo-vilela-18126922b/"  />

      <Equipe nome="Wende Layra" cargo="Designer" idade="19" Linkedin="https://www.linkedin.com/in/paulo-vilela-18126922b/"  />
    </div>
  );
}

export default App;