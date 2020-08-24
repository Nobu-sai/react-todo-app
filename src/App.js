import React, { useState } from 'react';
import ToDo from './To-Do.js';
import './App.css';



const App = () => {
  const [input, setInput] = useState("")
  const [todos, setToDos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setToDos([...todos, input])
    setInput("")
  }

  return (
    <div className="App">
      <form>
        <input value={input} onKeyPress={e => console.log(e)}onChange={(e)=> setInput(e.target.value)} placeholder="Enter the To-do Titile"></input>        
        {console.log(input)}

        <button disabled={!input} type="submit" onClick={addTodo}>Create a new To-do</button>
      </form>    

      <h1>To Do App</h1>    

      {
        todos.map((todo, i)=>(
          <ToDo title={todo}/>
        ))
      }
      {console.log(todos)}

    </div>
  );
}

export default App;
