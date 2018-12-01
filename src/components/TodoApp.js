import React from 'react';

import Actions from './Actions';
import Footer from './Footer';
import Header from './Header';
import Todos from './Todos';

export default class TodoApp extends React.Component {

  state = {
    todos: [],

    filters: {
      searchText: '',
      hideCompleted: false
    }
  }

  componentDidMount() {    
    try {
      const todosJSON = localStorage.getItem('todos');
      const todos = todosJSON ? JSON.parse(todosJSON) : [];      

      if (todos) {
        this.setState(() => ({ todos }));
      };

    } catch (e) {
      console.log(e);
      // Do nothing with this.state
    };
  }
  
  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));    
  }
  
  handleAddTodo = (todo) => {
    if (!todo.text) {
      return 'Enter valid value to add a To-Do';
    };

    const match = this.state.todos.findIndex((todoItem)=>{
      return todo.text === todoItem.text;
    });

    if (match < 0) {
      this.setState(prevState => ({ todos: prevState.todos.concat(todo) }) );
    } else {
      return `You've already listed this To-Do`;
    };
  }  

  handleRemoveTodo = (id) => {
    const todoIndex = this.state.todos.findIndex((todo) => todo.id === id)
    
    if (todoIndex > -1) {
      this.setState((prevState) => ({ todos: prevState.todos.filter((todo) => todo.id !== id) }));
    }
  }

  handleToggleTodo = (id) => {
    const todoIndex = this.state.todos.findIndex((todo) => todo.id === id);

    if (todoIndex > -1) {      
      this.setState((prevState)=>({
        todos: prevState.todos.map((todo)=>{
          if (todo.id === id) {
            todo.completed = !todo.completed;
          };
          return todo;
        })
      }));
    };
  }

  setFilters = (updates) => {
    if (typeof updates === 'string') {
      console.log(updates);
      this.setState((prevState)=>({
        filters: {
          searchText: updates,
          hideCompleted: prevState.filters.hideCompleted
        }
      }));
    };    

    if (typeof updates === 'boolean') {
      console.log(this.state.filters);      
      console.log(updates);
      this.setState((prevState)=>({
        filters: {
          searchText: prevState.filters.searchText,
          hideCompleted: updates
        }
      }));
      console.log(this.state.filters);
    };
  }

  render(){
    return (
      <div>
        <Header />
        <Actions 
          setFilters={this.setFilters}
        />
        <Todos 
          todos={this.state.todos}
          handleAddTodo={this.handleAddTodo}
          handleRemoveTodo={this.handleRemoveTodo}
          handleToggleTodo={this.handleToggleTodo}
        />
        <Footer />
      </div>
    );
  }
};
