import React, { useState, useEffect } from 'react';
import ToDo from './To-Do.js';
import './App.css';
import db from './firebase.js'



const App = () => {
  const [input, setInput] = useState("")
  const [todos, setToDos] = useState([]);

  useEffect(()=>{
    // console.log('hey')

    db.collection('todos').onSnapshot(snapshot => {
      setToDos(snapshot.docs.map((doc)=> 
        (        
          doc.data().title
          // console.log(doc.data().title)
       ))
      )
      
    });
  }, []);



  const addTodo = (e) => {
    // Prevent button from refleshing the page.
    e.preventDefault();
    
    // Add a new To Do 
    // setToDos([...todos, input])
    db.collection('todos').add({
      title: input, 
    });



    // Make the input form empty at the end/
    setInput("")
  }

  const todoIDs = [];
  const getDocsID = async () => {

        var ret = await db.collection('todos').get();

        ret.docs.map((e) => {           
            todoIDs.push(e.id);
        });

        return todoIDs
  }  
  getDocsID()

  const deleteAllToDo = (toDoDiv) => { 
       // Delete All    
    todoIDs.map((toDoID)=>{
        db.collection('todos').doc(toDoID).delete()
    })    
  }

  const deleteAToDo = (toDoDiv) => {     

    // Delete One    
    // const todoTitle = toDoDiv.children.children[0].innerText;
    const todoTitle = document.getElementById('todoTitle')
    // console.log(todoTitle)
      db.collection("todos").where("title", "==", todoTitle.innerHTML).get()
      .then(querySnapshot => {
        querySnapshot.docs[0].ref.delete();
        // querySnapshot.docs[0].delete();
        // console.log(querySnapshot.docs[0].ref)
      });
  }

  return (
    <div className="App">

      <h1>To Do App</h1>   

      <form>
        <input value={input} onKeyPress={e => console.log(e)} onChange={(e)=> setInput(e.target.value)} placeholder="Enter the To-do Titile"></input>        
        {console.log(input)}

        <button disabled={!input} type="submit" onClick={addTodo} className="submit-button">Create a new To-do</button>             
        <p className="delete-button" onClick={deleteAllToDo}>Delete All To-dos</p>
      </form>    
      
      <div className="todo-container">     
        <div className="todo">
          
        {
          todos.map((todo, i)=>(
            <ToDo title={todo} key={i} delete={e => deleteAToDo(e.target.parentElement)}/>                
          ))
        }

        {/* {console.log(todos)} */}
        </div>   
      </div> 

    </div>

  );
}

export default App;

// document.querySelector('.delete-button').addEventListener('click', deleteToDo)
// document.querySelector('.delete-button').onclick = (e) => 
//   deleteToDo()
// 