import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Life from './Life';

const rootElement = document.querySelector('#root');

const number = 11;

ReactDOM.render(<Life number={number} />, rootElement);
