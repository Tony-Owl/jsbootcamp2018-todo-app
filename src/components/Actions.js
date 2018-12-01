import React from 'react';

// Search Engine and Hide Completed Button:
const Actions = (props) => {
  return (
    <div className="actions">
      <div className="actions__container">
        <input
          className="input"
          type="text"
          id="search-text"
          placeholder="Filter todos"
          onInput={(e)=>{
            props.setFilters(e.target.value)
          }}
        />
        <label className="checkbox">
          <input
            type="checkbox"
            id="hide-completed"
            onChange={(e)=>{
              props.setFilters(e.target.checked)
            }}
          />
          Hide completed
        </label>
      </div>
    </div>
  );
};

export default Actions;