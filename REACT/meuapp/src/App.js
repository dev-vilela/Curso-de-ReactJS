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

====================================================
AULA 35:
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

---------------------------------
AULA 37
//TRABALHANDO COM STATE
import React, {Component} from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome:'Paulo',
      contador: 0
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this)
  }

  aumentar(){
    let state = this.state;
    state.contador +=1
    state.nome = 'Wende'
    this.setState(state)
  }

  diminuir(){
    let state = this.state;
    if(state.contador === 0){
      alert('Chegou a zero!');
        return;
    }
    state.contador -= 1;
    state.nome = 'Paulo'
    this.setState(state)
  }

  render(){
    return(
      <div>
        <h1>Contador</h1>

          {this.state.nome}

         <h3>
          
          <button onClick={this.diminuir}>-</button> 
               { this.state.contador }
          <button onClick={this.aumentar}>+</button>

          </h3>
      </div>
    );
  }
}


export default App;

----------------------------SEÇÃO 5---------------------------------
AULA 38
import React, {Component} from 'react'

class App extends Component{

    constructor(props){
      super(props);
      this.state = { 
        hora:'00:00:00'
      };
    }

    //
    componentDidMount(){

      setInterval(() =>{
        this.setState({hora: new Date().toLocaleTimeString() })
      }, 1000);

    }

    componentDidUpdate(){
      console.log('Atualizou!')
    }

    //SE DEVE ATUALIZAR OU NÃO
    // shouldComponentUpdate(){

    // }

  render(){
    return(
      <div>
        <h1>Aula 38 {this.state.hora} </h1>
      </div>
    );
  }
}

export default App;
*/


import React, {Component} from 'react';
import Membro from './components/Membro';

class App extends Component{


  render(){
    return(
      <div>
        <Membro nome="Visitante" />
      </div>
    );
  }
}

export default App;

