/*
AULA 49:
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

          //<h2>{nome}</h2> 
         </div>
        );
      }
      
      export default App;
      

*/


import React, {useState, useEffect, useMemo, useCallback} from "react";


function App() {

    const [tarefas, setTarefas] = useState([]);

    const [input, setInput] = useState('');

    useEffect(() => {
      const tarefasStorage = localStorage.getItem('tarefas')

      if(tarefasStorage){
        setTarefas(JSON.parse(tarefasStorage));
      }

      return () => {};
    }, [])

    useEffect(() => {
      localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }, [tarefas]);

    const btn = useCallback(() => {
        setTarefas([...tarefas, input]);
        setInput('');
        
    }, [input, tarefas]);

    const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

    //Pode fazer duas tarefas diferente de usar apenas STATE
    // const [nome, setNome] = useState('Paulo')

  return (
    <div>
        <ul>
          {tarefas.map(tarefa => (
            <li key={tarefa} > {tarefa} </li>
          ))}
        </ul> <br/>

        <strong>Você tem {totalTarefas} tarefas</strong> <br/>

        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

        <button type="button" onClick={btn}  >Adicionar</button>

         {/* <h2>{nome}</h2> */}
    </div>
  );
}

export default App;
