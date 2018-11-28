import React from 'react';

const Actions = () => {
  return (
    <div className="actions">
      <div className="actions__container">
        <input className="input" type="text" id="search-text" placeholder="Filter todos" />
        <label className="checkbox">
          <input type="checkbox" id="hide-completed" /> Hide completed
        </label>
      </div>
    </div>
  );
};

export default Actions;