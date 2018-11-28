import React from 'react';
import Header from './Header';
import Actions from './Actions';
import Todos from './Todos';

const TodoApp = () => {
  return (
    <div>
      <Header />
      <Actions />
      <Todos />
    </div>
  );
};

export default TodoApp;
