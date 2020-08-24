import React from 'react';
import './to-do.css';

const ToDo = (props) => {
  return (
    <div className="todo">
      <h2>{props.title}</h2>
      <p>This is what you need to do.</p>
    </div>
  )
}

export default ToDo;