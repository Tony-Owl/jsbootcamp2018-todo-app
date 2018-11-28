import React from 'react';

const Todo = () => {
  return (
    <label class="list-item">
      <div class="list-item__container">
        <input type="checkbox" /><span>Thing 1</span>
      </div>
      <button class="button button--text">remove</button>
    </label>
  );
};

export default Todo;