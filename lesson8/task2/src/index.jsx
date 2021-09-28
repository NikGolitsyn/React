import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Life from './Life';

const rootElement = document.querySelector('#root');

const date = new Date();

ReactDOM.render(<Life date={date} />, rootElement);
