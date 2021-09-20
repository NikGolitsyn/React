import React from 'react';
import ReactDOM from 'react-dom';

//should render following html

const rootElement = document.querySelector('#root');

const elem = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Submit</button>
    </div>
  </>
);

ReactDOM.render(elem, rootElement);
