import React from 'react';

export default class Toggle extends React.Component {
  constructor() {
    super();
  }

  ToggleButton(e) {
    e.target.textContent === 'On' ? (e.target.textContent = 'Off') : (e.target.textContent = 'On');
  }

  render() {
    return <button onClick={e => this.ToggleButton(e)}>Off</button>;
  }
}
