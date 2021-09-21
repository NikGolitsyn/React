import React from 'react';

export default class Toggler extends React.Component {
  constructor() {
    super();
  }

  onToggleButton(e) {
    e.target.textContent === 'On' ? (e.target.textContent = 'Off') : (e.target.textContent = 'On');
  }

  render() {
    return <button onClick={e => this.onToggleButton(e)}>Off</button>;
  }
}
