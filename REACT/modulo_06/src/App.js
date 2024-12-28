import React, {useState} from "react";


function App() {

    const [tarefas, setTarefas] = useState([
      'Pagar a conta de luz',
      'Estudar React'
    ]);

    const [input, setInput] = useState('');

    function btn(){
        setTarefas([...tarefas, input]);
        setInput('')
        
    }

    //Pode fazer duas tarefas diferente de usar apenas STATE
    // const [nome, setNome] = useState('Paulo')

  return (
    <div>
        <ul>
          {tarefas.map(tarefa => (
            <li key={tarefa} > {tarefa} </li>
          ))}
        </ul>

        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

        <button type="button" onClick={btn}  >Adicionar</button>

         {/* <h2>{nome}</h2> */}
    </div>
  );
}

export default App;
