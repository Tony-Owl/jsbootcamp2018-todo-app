import React from 'react';
import Todo from './Todo';
import uuidv4 from 'uuid/v4';

class Todos extends React.Component {
  state = {
    error: undefined
  }

  handleFilterUpdate = (e) => {
    console.log(this.props.todos)
  // const 
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
    const filteredTodos = this.props.todos.filter((todo) => {
      const searchTextMatch = todo.text.toLowerCase().includes(this.props.filters.searchText.toLowerCase())
      const hideCompletedMatch = !this.props.filters.hideCompleted || !todo.completed
      return searchTextMatch && hideCompletedMatch
    });
    
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

    return (
      <div className="container">
        <div id="todos">
          <h2 className="list-title">You have {incompleteTodos.length} todos left</h2>
          {filteredTodos.length <= 0 && <p className="empty-message">No to-dos to show</p>}
          {!!this.state.error && <p className="add-todo-error">{this.state.error}</p>}
          {!!filteredTodos.length && filteredTodos.map(todo => <Todo
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