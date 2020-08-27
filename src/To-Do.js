import React from 'react';
import './to-do.css';
// import db from './firebase.js'

const ToDo = (props) => {

  return (
    <div className="todo">
      <div className="todo-contents">
      <h2 id="todoTitle">{props.title}</h2>
      <p>This is what you need to do.</p>
      </div>    
      <p className="delete-button" id="deleteTodo" onClick={props.delete}>Delete this To-do</p>             
    </div>
  )
}

export default ToDo;