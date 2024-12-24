/*

EXEMPLO DA AULA 34

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

*/

import React, { Component } from "react";

class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre  nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
        <hr></hr>
         </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
      <h2>Olá sou o {this.props.nome}</h2>
      <h3>Cargo: {this.props.cargo}</h3>
      <h3>idade: {this.props.idade} anos</h3>
    </div>
    );
  }
}

function App(){
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
     <Equipe nome="Paulo" cargo="Desenvolvedor " idade="24"/>
      
    </div>
  );
}

export default App;