
import React, {Component} from "react";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
          contador: 0,
          form: {
            nome: '',
            email: '',
            senha: '',
            sexo: ''
          }

        
        }

        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
        this.dadosForm = this.dadosForm.bind(this);
        this.entrar = this.entrar.bind(this)

       
    }

    //FUNÇÃO

    aumentar(){
      let state = this.state;
      state.contador += 1
      this.setState(state)
          
    }

    diminuir(){
      let state = this.state;
      if(state.contador === 0){
        alert("Contador chegou a Zero!")
        return;
      }

      state.contador -=1;
      this.setState(state)
    }

    dadosForm(e){
      let form = this.state.form;

      form[e.target.name] = e.target.value;
      this.setState({form:form})
    }

    entrar(){
      const{nome, email, senha} = this.state;

      if(nome !== '' && email !== '' && senha !== ''){
          alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`)
      }else{
        this.setState({error: 'OPS! Ficou faltando algum campo para preencher.'})
      }

      
    }

    render(){
        return(
            <div>
             <h2>Login</h2>

             {this.state.error && <p>{this.state.error}</p>}

             <div onSubmit={this.entrar}>
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
                </select> <br/> <br/>
 
                <button type="submit">Entrar</button>
                </div>
                <div>
                  <h3>{this.state.form.email}</h3>
                  <h3>{this.state.form.senha}</h3>
                  <h3>{this.state.form.sexo}</h3>
                  
                </div>

                <hr></hr>

                <form>
                    
                </form>

<hr></hr>
                <h3>Contador</h3>

                

                <h3>

                    <button onClick={this.diminuir} >-</button>
                          {this.state.contador}
                    <button onClick={this.aumentar} >+</button>


                </h3>
            </div>
        );
    }
}



export default App