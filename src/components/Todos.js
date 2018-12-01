import React from 'react';
import Todo from './Todo';
import uuidv4 from 'uuid/v4';

class Todos extends React.Component {
  state = {
    error: undefined
  }

  handleAddTodo = (e) => {
    e.preventDefault();    
    const text = e.target.elements.todo.value.trim();    
    const todo = {
        id: uuidv4(),
        text,
        completed: false
    };
    const error = this.props.handleAddTodo(todo);

    this.setState(()=>({error}));

    if (!error) {
      e.target.elements.todo.value = '';
    };
  }

  render() {    
    return (
      <div className="container">
        <div id="todos">
          <h2 className="list-title">You have {this.props.todos.length} todos left</h2>
          {this.props.todos.length <= 0 && <p className="empty-message">No to-dos to show</p>}
          {!!this.state.error && <p className="add-todo-error">{this.state.error}</p>}
          {!!this.props.todos.length && this.props.todos.map(todo => <Todo
            todo={todo}
            key={todo.id}            
            handleRemoveTodo={this.props.handleRemoveTodo}
            handleToggleTodo={this.props.handleToggleTodo}
          />)}
        </div>
        <form
          id="new-todo"
          onSubmit={this.handleAddTodo}
        >
          <input
            className="input"
            type="text"
            name="todo"
            placeholder="Something to do"
          />
          <button className="button">Add Todo</button>
        </form>
      </div>
    );
  };
};

//<Todo text={todoItem.text} key={todoItem.id} />
export default Todos;