import React from 'react';
import Todo from './Todo';

let todoExist = true;

const Todos = () => {
  return (
    <div className="container">
      <div id="todos">
        <h2 className="list-title">You have 0 todos left</h2>
        <p className="empty-message">No to-dos to show</p>
        <Todo />
      </div>
      <form id="new-todo">
        <input className="input" type="text" name="text" placeholder="Something to do" />
        <button className="button">Add Todo</button>
      </form>
    </div>
  );
};

export default Todos;