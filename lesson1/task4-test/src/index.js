import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

const elem = <h1 className="greeting__title">Hello, World!</h1>

ReactDOM.render(elem, rootElement);
