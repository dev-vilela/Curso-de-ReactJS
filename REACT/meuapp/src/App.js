import React from "react";

const Bemvindo = (props) => {
  return (
    <div>
      <h2>Bem-vindo(a) {props.nome}</h2>
      <h3>Sua senha é: {props.senha}</h3>
    </div>
  )
}

function App(){
  return(
    <div>
      Olá Mundo!
      <Bemvindo nome="Paulo" senha="0430201" />
      <Bemvindo nome="Vilela" senha="4924032" />
      <h1>Curso de React</h1>
    </div>
  );
}

export default App;