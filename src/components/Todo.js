import React from 'react';

const Todo = (props) => {
  const checkedBox = props.todo.completed;
  return (
    <label className="list-item">
      <div className="list-item__container">
        <input
          type="checkbox"
          checked={checkedBox}
          onChange={() => {
            props.handleToggleTodo(props.todo.id)
            }
          }
        />
        <span>{props.todo.text}</span>
      </div>
      <button
        className="button button--text"
        onClick={()=>{
          props.handleRemoveTodo(props.todo.id)
        }}
      >
        remove
      </button>
    </label>
  );
};

export default Todo;