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
---------------------------------------------------------
AULA 41:
import React, {Component} from 'react';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        status: false
    };

    this.sair = this.sair.bind(this);
    this.entrar = this.entrar.bind(this);
  }

  sair(){
      this.setState({status: false})
  }

  entrar(){
    this.setState({status: true})
  }

  render(){
    return(
      <div>
        {this.state.status ? 
          <div>
            <h2>Bem-vindo ao sistema</h2>

            <button onClick={this.sair} >Sair</button>
          </div> : 
          <div>
            <h2>Olá Visitante, faça seu login.</h2>

            <button onClick={this.entrar} >Entrar no sistema</button>
          </div>
        }
      </div>
    );
  }
}

export default App;
----------------------------------------------------
AULA 42:

import React, {Component} from 'react';
import Feed from './aula42/Feed';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        feed:[
          {id:1, username: "Paulo", curtidas:100, comentarios:2},
          {id:2, username: "Wende", curtidas:200, comentarios:16},
          {id:3, username: "Zayne", curtidas:500, comentarios:106},
          {id:4, username: "Layla", curtidas:1, comentarios:0}
        ]
    };
  }


  render(){
    return(
      <div>
          {this.state.feed.map((item) =>{
            return(
                <Feed id={item.id} username={item.username} 
                curtidas={item.curtidas} comentarios={item.comentarios} />
            );
          })}
      </div>
    );
  }
}

export default App;
---------------------------------------------------------
AULA 43:
import React, {Component} from "react";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            senha: '',
            sexo:'masculino'
        }

        this.trocaEmail = this.trocaEmail.bind(this);
        this.trocaSexo = this.trocaSexo.bind(this)
    }

    trocaEmail(e){
      let valorDigitado = e.target.value;
      this.setState({email:valorDigitado});
    }

    trocaSexo(e){
      let valorDigitado = e.target.value;
      this.setState({sexo: valorDigitado});
    }

    render(){
        return(
            <div>
             <h2>Login</h2>
                Email:
                <input type="email" name="email" value={this.state.email} onChange={this.trocaEmail} /> <br/> <br/>
                Senha:
                <input type="text" name="senha" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} /> <br/> <br/>
                Sexo:
                <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo} >
                    <option value="masculino" >Masculino</option>
                    <option value="feminino" >Feminino</option>
                </select>

                <div>
                  <h3>{this.state.email}</h3>
                  <h3>{this.state.senha}</h3>
                </div>
            </div>
        );
    }
}

export default App
----------------------------------------------------------------------------------------
AULA 44:

import React, {Component} from "react";

class App extends Component{

    constructor(props){
      super(props);
      this.state = {
        nome:'',
        email:'',
        senha: '',
        error: ''
      };

      this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(event){
      const{nome, email, senha} = this.state;

      if(nome !== '' && email !== '' && senha !== '' ){
        alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`)
      }else{
        this.setState({error: 'Ops! Ficou faltando algum campo.'})
      }

      

      event.preventDefault()
    }
   
    render(){
        return(
            <div>
              <h1>Novo usuario</h1>

              {this.state.error && <p>{this.state.error}</p>}

              <form onSubmit={this.cadastrar} >
                <label>Nome:</label>
                <input type="text" value={this.state.name} onChange={(e) => this.setState({nome: e.target.value})} /> <br/> <br/>

                <label>Email:</label>
                <input type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} /> <br/> <br/>

                <label>Senha:</label>
                <input type="password" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} /> <br/> <br/>

                <button type="submit" >Cadastrar</button>
              </form>
            </div>
        );
    }
}

export default App;

*/

import React, {Component} from "react";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
          form: {
            nome: '',
            email: '',
            senha: '',
            sexo: ''
          }
        }

        this.dadosForm = this.dadosForm.bind(this);

       
    }

    dadosForm(e){
      let form = this.state.form;

      form[e.target.name] = e.target.value;
      this.setState({form:form})
    }

    render(){
        return(
            <div>
             <h2>Login</h2>
                Nome:
                <input type="text" name="nome" value={this.state.form.nome} onChange={this.dadosForm} /> <br/> <br/>
                Email:
                <input type="email" name="email" value={this.state.form.email} onChange={this.dadosForm} /> <br/> <br/>
                Senha:
                <input type="text" name="senha" value={this.state.form.senha} onChange={this.dadosForm} /> <br/> <br/>
                Sexo:
                <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm} >
                    <option value="masculino" >Masculino</option>
                    <option value="feminino" >Feminino</option>
                </select>

                <div>
                  <h3>{this.state.form.email}</h3>
                  <h3>{this.state.form.senha}</h3>
                  <h3>{this.state.form.sexo}</h3>
                  
                </div>
            </div>
        );
    }
}

export default App